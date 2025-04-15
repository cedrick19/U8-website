import { Card, CardContent, Button } from 'framework7-react';
import Video from '@/assets/image/homebody/live.png';
import Lottery from '@/assets/image/homebody/lottery.svg';
import Electronic from '@/assets/image/homebody/electronic.svg';
import Sports from '@/assets/image/homebody/sports.png';
import Fishing from '@/assets/image/homebody/fishing.png';
import Poker from '@/assets/image/homebody/poker.png';
import Chain from '@/assets/image/homebody/chain.png';
import LineCardpolygon from '@/components/LineCardPolygon/LineCardpolygon';
const topCards = [
  {
    id: 'live',
    title: 'LIVE VIDEO',
    image: Video,
  },
  {
    id: 'lottery',
    title: 'LOTTERY TICKET',
    image: Lottery,
  },
];

const categories = [
  {
    id: 1,
    name: 'Sports',
    image: Sports,
    color: 'bg-[#3a1e7a]',
  },
  {
    id: 2,
    name: 'Fishing',
    image: Fishing,
    color: 'bg-[#3a1e7a]',
  },
  {
    id: 3,
    name: 'Poker',
    image: Poker,
    color: 'bg-[#3a1e7a]',
  },
  {
    id: 4,
    name: 'Chain',
    image: Chain,
    color: 'bg-[#3a1e7a]',
  },
];
const cardBaseClass = 'm-0 overflow-hidden rounded-xl border-2 border-white bg-[#4C2CCA4D]/10';

const CategoryCard = ({ name, image, color }: { name: string; image: string; color: string }) => (
  <Card className="m-0 h-24 overflow-hidden rounded-xl border-2 border-white p-1 pt-2 shadow-md">
    <LineCardpolygon />
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
        {topCards.map((card) => (
          <Card key={card.id} className={cardBaseClass}>
            <LineCardpolygon />
            <div className="flex h-full flex-col items-center p-4">
              <div className="relative h-32 w-full">
                <img src={card.image} alt={card.title} className="h-full w-full object-contain" />
              </div>
              <h2 className="mt-auto text-center text-3xl font-extrabold text-purple-800">
                {card.title}
              </h2>
            </div>
          </Card>
        ))}

        <Card className={`col-span-2 ${cardBaseClass}`}>
          <LineCardpolygon />
          <div className="flex flex-row items-center justify-center p-4 text-center">
            <div className="flex-1">
              <h2 className="relative text-3xl font-extrabold text-purple-900">ELECTRONIC GAMES</h2>
            </div>
            <div className="flex-1">
              <img
                src={Electronic}
                alt="Electronic Games"
                className="relative mx-auto w-full max-w-[200px] object-contain"
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-x-2 px-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
