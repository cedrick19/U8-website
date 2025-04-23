import { Card, CardContent, Button } from 'framework7-react';
import { topCards, categories, navigateToRoute, TopCard, Category } from '@/pages/home/utils';
import LineCardPolygon from '@/components/LineCardPolygon/LineCardpolygon';

const cardBaseClass =
  'm-0 overflow-hidden rounded-xl border-2 border-white shadow-md bg-[#4C2CCA4D]/10';

const CategoryCard = ({ name, image, color, route, className = '' }: Category) => (
  <Card className={`${cardBaseClass} ${className} m-0 h-24 p-1 pt-2`}>
    <LineCardPolygon />
    <CardContent className="flex flex-col items-center justify-between p-0">
      <div className="h-15 flex w-12 items-center justify-center p-0">
        <img
          src={image || '/placeholder.svg'}
          alt={name}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="w-full pb-4">
        <div className="h-8 rounded-3xl border-2 border-[#3a1e7a] pt-0">
          <Button
            className={`${color} h-6 w-full rounded-3xl px-0 text-xs font-bold normal-case text-white`}
            onClick={() => route && navigateToRoute(route)}
          >
            {name}
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const HomeContent = () => {
  return (
    <div className="flex flex-col pb-32 md:pb-52">
      <div className="grid grid-cols-2 gap-4 p-4">
        {topCards.map((card: TopCard) => (
          <div
            key={card.id}
            className={`cursor-pointer ${card.fullWidth ? 'col-span-2' : ''}`}
            onClick={() => navigateToRoute(card.route)}
          >
            <Card className={`${cardBaseClass} h-full`}>
              <LineCardPolygon />
              {card.fullWidth ? (
                <div className="flex flex-row items-center justify-center p-4 text-center">
                  <h2 className="relative flex-1 text-3xl font-extrabold text-purple-900">
                    {card.title}
                  </h2>

                  <div className="flex-1">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="relative mx-auto w-full max-w-[200px] object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center p-4">
                  <div className="relative h-32 w-full">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h2 className="mt-auto text-center text-3xl font-extrabold text-purple-800">
                    {card.title}
                  </h2>
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-x-2 px-4">
        {categories.map((category: Category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
