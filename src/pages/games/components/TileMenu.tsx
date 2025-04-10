import { Card, CardContent } from "framework7-react";
import { cn } from "@/globals/utils";

interface ITileMenu {
  title: string;
  image: string;
  onNavigate: () => void;
}

export const TileMenu = ({ title, image, onNavigate }: ITileMenu) => {
  return (
    <Card raised>
      <CardContent
        padding={false}
        className="h-36 rounded-xl border-b-4 border-t-4 border-b-white border-t-white bg-[#4C2CCA4D]/10"
      >
        <div
          onClick={onNavigate}
          className={cn(
            "h-full w-full bg-contain bg-left-bottom bg-no-repeat p-5",
          )}
          style={{ backgroundImage: `url(${image})` }}
        >
          <h2
            className="reflect-text text-gradient text-right text-3xl font-extrabold"
            data-text={title.toUpperCase()}
          >
            {title.toUpperCase()}
          </h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default TileMenu;
