import { Card } from "./ui/card";

interface Painting {
  id: string;
  title: string;
  artist: string;
  image_url: string;
  year: string;
}

interface PaintingResultProps {
  painting: Painting;
}

export function PaintingResult({ painting }: PaintingResultProps) {
  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <img
          src={painting.image_url}
          alt={painting.title}
          className="w-48 h-48 object-cover rounded-md"
        />
        <div>
          <h2 className="text-xl font-semibold">{painting.title}</h2>
          <p className="text-gray-600">
            {painting.artist} ({painting.year})
          </p>
        </div>
      </div>
    </Card>
  );
}
