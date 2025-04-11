import { Card, CardContent, Button } from 'framework7-react';
import Video from '@/assets/image/homebody/live.png';
import Lottery from '@/assets/image/homebody/lottery.png';
import Electronic from '@/assets/image/homebody/electronic.png';
import Sports from '@/assets/image/homebody/sports.png';
import Fishing from '@/assets/image/homebody/fishing.png';
import Poker from '@/assets/image/homebody/poker.png';
import Chain from '@/assets/image/homebody/chain.png';
import LineCardpolygon from '@/components/LineCardPolygon/LineCardpolygon';

const HomeBody = () => {
  const categories = [
    {
      id: 1,
      name: 'Sports',
      image: Sports,
      color: 'bg-purple-800',
    },
    {
      id: 2,
      name: 'Fishing',
      image: Fishing,
      color: 'bg-purple-800',
    },
    {
      id: 3,
      name: 'Poker',
      image: Poker,
      color: 'bg-purple-800',
    },
    {
      id: 4,
      name: 'Chain',
      image: Chain,
      color: 'bg-purple-800',
    },
  ];

  return (
    <div className="flex flex-col pb-20">
      <div className="grid grid-cols-2 gap-3">
        <Card className="row-span-2 flex h-[290px] w-full flex-col overflow-hidden rounded-xl border-b-4 border-b-white border-t-white bg-[#4C2CCA4D]/10">
          <LineCardpolygon />
          <div className="relative h-full w-full overflow-hidden">
            <img
              src={Video}
              alt="Live Video"
              className="absolute left-0 top-0 h-full w-full object-contain"
            />
          </div>
          <CardContent className="flex flex-col items-center justify-center bg-transparent text-center">
            <h2 className="text-gradient text-center text-3xl font-extrabold md:text-2xl">
              LIVE VIDEO
            </h2>
          </CardContent>
        </Card>

        <div className="flex flex-col">
          <Card className="relative mb-0 flex h-[142px] items-start overflow-hidden rounded-xl border-y border-white bg-purple-800/5 px-4 py-2">
            <LineCardpolygon />
            <CardContent className="z-10 flex flex-col justify-center gap-2 p-0">
              <h2 className="text-gradient text-xl font-extrabold text-purple-800">
                LOTTERY TICKET
              </h2>
            </CardContent>

            <img
              src={Lottery}
              alt="Colorful Lottery Ticket"
              className="absolute bottom-2 right-1 z-0 h-20 w-20 object-contain opacity-90"
            />
          </Card>

          <Card className="relative flex h-[118px] items-start overflow-hidden rounded-xl border-b-white border-t-white bg-[#4C2CCA4D]/10 px-2 pt-2">
            <LineCardpolygon />
            <CardContent className="z-10 flex flex-1 flex-col justify-center space-y-1 p-0">
              <h2 className="text-gradient text-xl font-extrabold text-purple-800">
                ELECTRONIC GAMES
              </h2>
            </CardContent>

            <img
              src={Electronic}
              alt="Lottery Diamond"
              className="absolute bottom-2 right-1 z-0 h-20 w-20 object-contain opacity-90"
            />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 px-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="m-0 overflow-hidden rounded-xl bg-purple-100 shadow-md"
          >
            <LineCardpolygon />
            <CardContent className="flex flex-col items-center justify-between p-0">
              <div className="flex h-14 w-full items-center justify-center p-4">
                <img
                  src={category.image || '/placeholder.svg'}
                  alt={category.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full p-1 pb-4">
                <Button
                  className={`${category.color} w-full rounded-xl px-2 font-medium text-white`}
                >
                  {category.name}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeBody;
