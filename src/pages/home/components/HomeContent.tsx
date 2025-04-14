import { Card, CardContent, Button } from 'framework7-react';
import Video from '@/assets/image/homebody/live.png';
import Lottery from '@/assets/image/homebody/lottery.svg';
import Electronic from '@/assets/image/homebody/electronic.svg';
import Sports from '@/assets/image/homebody/sports.png';
import Fishing from '@/assets/image/homebody/fishing.png';
import Poker from '@/assets/image/homebody/poker.png';
import Chain from '@/assets/image/homebody/chain.png';
import LineCardpolygon from '@/components/LineCardPolygon/LineCardpolygon';

const HomeContent = () => {
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

  return (
    <div className="flex flex-col pb-20">
      <div className="grid grid-cols-2 gap-4 p-4">
        <Card className="m-0 overflow-hidden rounded-xl border-2 border-x-white border-y-purple-50 bg-[#4C2CCA4D]/10">
          <LineCardpolygon />
          <div className="flex h-full flex-col items-center p-4">
            <div className="relative mb-5 h-32 w-full">
              <img src={Video} className="left-0 top-0 h-full w-full object-contain" />
            </div>
            <h2 className="mt-auto text-center text-3xl font-extrabold text-purple-800">
              LIVE VIDEO
            </h2>
          </div>
        </Card>
        <Card className="m-0 overflow-hidden rounded-xl border-2 border-x-white border-y-purple-50 bg-[#4C2CCA4D]/10">
          <LineCardpolygon />
          <div className="flex h-full flex-col items-center p-4">
            <div className="relative mb-5 h-32 w-full">
              <img src={Lottery} className="left-0 top-0 h-full w-full object-contain" />
            </div>
            <h2 className="mt-auto text-center text-3xl font-extrabold text-purple-800">
              LOTTERY TICKET
            </h2>
          </div>
        </Card>

        <Card className="col-span-2 m-0 overflow-hidden rounded-xl border-2 border-x-white border-y-purple-50 bg-[#4C2CCA4D]/10">
          <LineCardpolygon />
          <div className="flex flex-row items-center justify-center p-4 text-center">
            <div className="flex-1">
              <h2 className="relative text-3xl font-extrabold text-purple-900">ELECTRONIC GAMES</h2>
            </div>
            <div className="flex-1">
              <img
                src={Electronic}
                className="relative mx-auto w-full max-w-[200px] object-contain"
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-x-2 px-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="m-0 h-24 overflow-hidden rounded-xl border-2 border-white bg-purple-100 p-1 pt-2 shadow-md"
          >
            <LineCardpolygon />
            <CardContent className="flex flex-col items-center justify-between p-0">
              <div className="flex h-10 w-auto items-center justify-center p-2">
                <img
                  src={category.image || '/placeholder.svg'}
                  alt={category.name}
                  className="left-0 top-0 h-auto w-auto object-contain"
                />
              </div>
              <div className="w-full p-1 pb-4">
                <div className="h-8 rounded-xl border-4 border-[#3a1e7a]">
                  <Button
                    className={`${category.color} h-5 w-full px-2 text-xs font-bold text-white`}
                  >
                    {category.name}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
