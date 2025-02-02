import { Hono } from "hono";
import OpenAI from "openai";

type Bindings = {
  VECTORIZE: Vectorize;
  AI: Ai;
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/paintings", async (c) => {
  const { results } = await c.env.DB.prepare("SELECT * FROM paintings;").all();

  return c.json(results);
});

app.get("/query", async (c) => {
  const openai = new OpenAI({ apiKey: c.env.OPENAI_API_KEY });

  let userQuery = "Feeling excited but nervous about my first day at work.";

  let embeddingResponse = await openai.embeddings.create({
    input: userQuery,
    model: "text-embedding-3-small",
  });
  console.log(embeddingResponse);

  let matches = await c.env.VECTORIZE.query(
    embeddingResponse.data[0].embedding,
    {
      topK: 1,
    }
  );

  //{"matches":{"count":1,"matches":[{"id":"12","score":0.21051788}]}}

  return c.json({ matches });
});

export default app;
