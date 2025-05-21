import LineCardPolygon from '@/components/LineCardPolygon/LineCardPolygon';
import { Card, CardContent } from 'framework7-react';

interface ITileMenu {
  title: string;
  image: string;
  description: string;
  onNavigate: () => void;
}

export const TileMenu = ({ title, image, description, onNavigate }: ITileMenu) => {
  return (
    <Card raised>
      <CardContent
        padding={false}
        className="h-full rounded-xl border-b-4 border-t-4 border-b-white border-t-white bg-[#4C2CCA4D]/10"
      >
        <div onClick={onNavigate} className="relative h-32 w-full overflow-hidden rounded-xl p-5">
          <LineCardPolygon />
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="absolute -left-3 bottom-0 h-full w-auto max-w-[50%] opacity-[0.5]"
          />
          <h2 className="text-gradient relative z-50 text-right text-3xl font-extrabold">
            {title.toUpperCase()}
          </h2>
          <p className="text-gradient text-shadow-sm relative z-50 flex-wrap text-right text-sm font-extrabold">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TileMenu;
