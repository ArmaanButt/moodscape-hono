import { Hono } from "hono";
import OpenAI from "openai";

type Bindings = {
  VECTORIZE: Vectorize;
  AI: Ai;
  DB: D1Database;
  BUCKET: R2Bucket;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/api/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/paintings", async (c) => {
  const { results } = await c.env.DB.prepare("SELECT * FROM paintings;").all();

  return c.json(results);
});

app.get("/api/query", async (c) => {
  const openai = new OpenAI({ apiKey: c.env.OPENAI_API_KEY });

  const userQuery = c.req.query("query");
  if (!userQuery) {
    return c.json({ error: "Missing query parameter 'query'" }, 400);
  }

  const embeddingResponse = await openai.embeddings.create({
    input: userQuery,
    model: "text-embedding-3-small",
  });

  const matches = await c.env.VECTORIZE.query(
    embeddingResponse.data[0].embedding,
    {
      topK: 2, // Get top 2 matches in case first one has no image
    }
  );
  console.log(matches);

  if (!matches.matches.length) {
    return c.json({ error: "No matches found" }, 404);
  }

  // Check which paintings have images in R2
  const validMatches = [];
  for (const match of matches.matches) {
    const exists = await c.env.BUCKET.head(`${match.id}.jpg`);
    console.log(exists);
    if (exists) {
      validMatches.push(match);
      if (validMatches.length === 1) break; // Stop after finding first valid match
    }
  }

  if (!validMatches.length) {
    return c.json({ error: "No paintings with images found" }, 404);
  }

  // Get painting details from SQL DB
  const matchIds = validMatches.map((m: { id: string }) => m.id).join(",");
  const { results } = await c.env.DB.prepare(
    "SELECT * FROM paintings WHERE id IN (?)"
  )
    .bind(matchIds)
    .all();

  return c.json({
    matches: validMatches,
    paintings: results,
  });
});

export default app;
