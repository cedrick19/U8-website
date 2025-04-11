import { Card, CardContent } from 'framework7-react';

interface TileImageProps {
  image: string;
}

export const TileImage = ({ image }: TileImageProps) => {
  return (
    <Card>
      <CardContent padding={false}>
        <img src={image} alt={image} className="rounded-xl" />
      </CardContent>
    </Card>
  );
};

export default TileImage;
