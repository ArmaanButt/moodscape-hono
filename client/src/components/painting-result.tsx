import { Card } from "@/components/ui/card";

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

const R2_BUCKET_URL = "https://pub-596b9ffdcb0146e9ab93e537b7ddffb1.r2.dev";

export function PaintingResult({ painting }: PaintingResultProps) {
  const imageUrl = `${R2_BUCKET_URL}/${painting.id}.jpg?width=800&quality=80`;

  return (
    <Card className="p-4">
      <div className="flex">
        <img
          src={imageUrl}
          alt={painting.title}
          className="w-full h-auto object-contain rounded-md mx-auto"
          loading="lazy"
        />
      </div>
    </Card>
  );
}
