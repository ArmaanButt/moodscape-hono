import { Hono } from "hono";

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

export default app;
