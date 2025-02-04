import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { PaintingResult } from "./painting-result";

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

export function ChatInterface() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<QueryResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/api/query?q=${encodeURIComponent(input)}`);
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
        <h1 className="text-2xl font-bold mb-4">Art Mood Matcher</h1>
        <p className="text-gray-600 mb-4">
          Describe how you're feeling, and I'll find a painting that matches
          your mood.
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
    </div>
  );
}
