import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/paintings", (c) => {
  const paintings = [
    { id: 1, title: "The Starry Night", artist: "Vincent van Gogh" },
    { id: 2, title: "The Scream", artist: "Edvard Munch" },
    { id: 3, title: "Mona Lisa", artist: "Leonardo da Vinci" },
  ];

  return c.json(paintings);
});

export default app;
