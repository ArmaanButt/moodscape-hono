import { Hono } from "hono";
import OpenAI from "openai";

type Bindings = {
  VECTORIZE: Vectorize;
  AI: Ai;
  DB: D1Database;
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

  // Get query from request URL params
  const userQuery = c.req.query("query");
  if (!userQuery) {
    return c.json({ error: "Missing query parameter 'query'" }, 400);
  }

  // Get embedding for user query
  const embeddingResponse = await openai.embeddings.create({
    input: userQuery,
    model: "text-embedding-3-small",
  });
  // Find closest matching paintings in vector DB
  const matches = await c.env.VECTORIZE.query(
    embeddingResponse.data[0].embedding,
    {
      topK: 1, // Get top match
    }
  );

  if (!matches.matches.length) {
    return c.json({ error: "No matches found" }, 404);
  }

  // Get painting details from SQL DB
  const matchIds = matches.matches.map((m: { id: string }) => m.id).join(",");
  const { results } = await c.env.DB.prepare(
    `SELECT * FROM paintings WHERE id IN (${matchIds})`
  ).all();

  return c.json({
    matches: matches.matches,
    paintings: results,
  });
});

export default app;
