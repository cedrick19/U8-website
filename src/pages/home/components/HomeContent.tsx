import { Card, CardContent, Button } from 'framework7-react';
import { gameInfo } from '@/pages/games/utils';
import LineCardPolygon from '@/components/LineCardPolygon/LineCardPolygon';
import { cn, f7navigate } from '@/utils/helper';
import { GameInfoTypes } from './type';

const cardBaseClass =
  'm-0 overflow-hidden rounded-xl border-2 border-white shadow-md bg-[#4C2CCA4D]/10';

const CatHighlightCard = ({ imageHome, title, route, spanTwo }: GameInfoTypes) => (
  <Card className={cn('h-full', cardBaseClass)}>
    <LineCardPolygon />
    <div
      className={cn('relative flex p-3', spanTwo ? 'flex-row-reverse items-center' : 'flex-col')}
    >
      <img src={imageHome} alt={title} className={cn(spanTwo ? 'h-full' : 'h-36')} />
      <h2
        className={cn(
          'text-gradient text-3xl font-extrabold',
          spanTwo ? 'text-left' : 'text-center',
        )}
      >
        <div id={`btn-${route}`} onClick={() => f7navigate(`btn-${route}`, route)}>
          {title}
        </div>
      </h2>
    </div>
  </Card>
);

const CategoryCard = ({ imageHome, title, route }: GameInfoTypes) => (
  <Card className={cn('h-24 p-1 pt-2', cardBaseClass)}>
    <LineCardPolygon />
    <CardContent className="flex flex-col items-center p-0">
      <img src={imageHome} alt={title} className="h-15 w-12" />
      <div className="w-full">
        <div className="h-[25px] rounded-xl bg-primary-gradient pb-[2px]">
          <div className="h-full rounded-xl bg-white">
            <Button
              id={`btn-${route}`}
              className="h-[20px] rounded-xl bg-primary-gradient text-xs font-bold normal-case text-white"
              onClick={() => f7navigate(`btn-${route}`, route)}
            >
              {title}
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const HomeContent = () => {
  return (
    <div className="gap-4 px-4 pb-20">
      <div className="grid grid-cols-2 gap-4 pt-4">
        {gameInfo
          .filter((card) => card.layer === 1)
          .map((card) => (
            <div
              className={cn(card.fullWidth && 'col-span-2')}
              key={card.title}
              onClick={() => f7navigate(`btn-${card.route}`, card.route)}
            >
              <CatHighlightCard {...card} spanTwo={card.fullWidth} />
            </div>
          ))}
      </div>
      <div className="grid grid-cols-3 gap-2 pt-4">
        {gameInfo
          .filter((card) => card.layer === 2)
          .map((card) => (
            <div key={card.title} onClick={() => f7navigate(`btn-${card.route}`, card.route)}>
              <CategoryCard {...card} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeContent;
