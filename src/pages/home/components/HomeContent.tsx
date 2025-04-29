import { Card, CardContent, Button } from 'framework7-react';
import { topCards, categories, navigateToRoute, TopCard, Category } from '@/pages/home/utils';
import LineCardPolygon from '@/components/LineCardPolygon/LineCardpolygon';
import { cn } from '@/utils/helper';

const cardBaseClass =
  'm-0 overflow-hidden rounded-xl border-2 border-white shadow-md bg-[#4C2CCA4D]/10';

const CategoryCard = ({ name, image, route }: Category) => (
  <Card className={cn('m-0 h-24 p-1 pt-2', cardBaseClass)}>
    <LineCardPolygon />
    <CardContent className="flex flex-col items-center justify-between p-0">
      <div className="h-15 flex w-12 items-center justify-center p-0">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>
      <div className="w-full pb-4">
        <div className="h-8 rounded-3xl border-2 border-[#3a1e7a] bg-white pt-0">
          <Button
            className="h-6 w-full rounded-3xl bg-primary-gradient px-0 text-xs font-bold normal-case text-white"
            onClick={() => navigateToRoute(route)}
          >
            {name}
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const CatHighlightCard = ({
  image,
  title,
  spanTwo,
}: {
  image: string;
  title: string;
  spanTwo?: boolean;
}) => {
  return (
    <Card className={cn('h-full', cardBaseClass)}>
      <LineCardPolygon />
      <div
        className={cn('relative flex p-3', spanTwo ? 'flex-row-reverse items-center' : 'flex-col')}
      >
        <img
          src={image}
          alt={title}
          className={cn('object-contain', spanTwo ? 'h-full' : 'h-36')}
        />
        <h2
          className={cn(
            'text-gradient text-3xl font-extrabold',
            spanTwo ? 'text-left' : 'text-center',
          )}
        >
          {title}
        </h2>
      </div>
    </Card>
  );
};

export const HomeContent = () => {
  return (
    <div className="gap-4 px-4 pb-20">
      <div className="grid grid-cols-2 gap-4 pt-4">
        {topCards.map((card: TopCard) => (
          <div
            key={card.id}
            className={cn('cursor-pointer', card.fullWidth && 'col-span-2')}
            onClick={() => navigateToRoute(card.route)}
          >
            <CatHighlightCard image={card.image} title={card.title} spanTwo={card.fullWidth} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 pt-4">
        {categories.map((category: Category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
