import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { PaintingResult } from "@/components/painting-result";

interface Painting {
  id: string;
  title: string;
  artist: string;
  image_url: string;
  year: string;
}

interface QueryResponse {
  matches: Array<{ id: string; score: number }>;
  paintings: Painting[];
}

const API_URL = import.meta.env.PROD
  ? "https://moodscape-api.armaan-r-butt.workers.dev"
  : "";

export function ChatInterface() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<QueryResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/query?query=${encodeURIComponent(input)}`
      );
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching paintings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Moodscape</h1>
        <p className="text-gray-600 mb-4">
          Describe how you're feeling, and I'll find a painting that matches
          your mood from the works of Albert Bierstadt.
        </p>

        <p className="text-gray-600 mb-6">
          Albert Bierstadt (1830-1902) was a German-American painter renowned
          for his sweeping landscapes of the American West. His dramatic
          paintings captured the grandeur and untamed beauty of the frontier,
          from Yosemite Valley to the Rocky Mountains, often bathed in luminous
          atmospheric effects.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="How are you feeling today?"
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Finding..." : "Find Art"}
          </Button>
        </form>

        {result && (
          <div className="space-y-4">
            {result.paintings.map((painting) => (
              <PaintingResult key={painting.id} painting={painting} />
            ))}
          </div>
        )}
      </Card>

      <footer className="text-center mt-6 text-sm text-gray-500">
        Made with ❤️ by{" "}
        <a
          href="https://armaanbutt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Armaan Butt
        </a>
      </footer>
    </div>
  );
}
