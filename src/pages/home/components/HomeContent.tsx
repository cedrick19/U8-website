import { Card, CardContent } from 'framework7-react';
import Video from '@/assets/image/homebody/live.png';
import Lottery from '@/assets/image/homebody/lottery.png';
import Electronic from '@/assets/image/homebody/electronic.png';

const HomeBody = () => {
  return (
    <div className="grid grid-cols-2 pb-20">
      <Card className="row-span-2 m-3 flex h-[360px] w-full flex-col overflow-hidden rounded-xl border-b-4 border-b-white border-t-white bg-[#4C2CCA4D]/10">
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={Video}
            alt="Live Video"
            className="absolute left-0 top-0 h-full w-full object-contain"
          />
        </div>
        <CardContent className="flex flex-col items-center justify-center bg-transparent text-center">
          <h2
            className="reflect-text2 text-gradient text-right text-xl font-extrabold md:text-2xl"
            data-text="LIVE VIDEO"
          >
            LIVE VIDEO
          </h2>
          <p className="mt-3 text-xs font-semibold text-purple-800">
            Exotic Beauty Dutch Officer
            <br />
            Immersive Experience Online
            <br />
            Real-Man Interaction
          </p>
        </CardContent>
      </Card>
      <Card className="mb-0 flex h-52 items-center justify-between rounded-xl border-y border-white bg-purple-800/5 px-2 py-3">
        <CardContent className="flex flex-col justify-center gap-2 p-0">
          <h2 className="text-lg font-bold text-purple-800">Lottery Ticket</h2>
          <p className="text-xs text-gray-600">
            Explore a range of vibrant, authentic lottery tickets in popular styles.
          </p>
        </CardContent>
        <img
          src={Lottery}
          alt="Colorful Lottery Ticket"
          className="h-24 w-auto flex-shrink-0 object-contain"
        />
      </Card>
      <Card className="flex h-[130px] items-center justify-between rounded-xl border-b-white border-t-white bg-[#4C2CCA4D]/10 px-2">
        <CardContent className="flex flex-col justify-center space-y-1 p-0">
          <h2 className="text-lg font-bold text-purple-800">LOTTERY TICKET</h2>
          <p className="text-xs text-gray-600">
            Million Prize
            <br />
            Pool
            <br />
            Touch
          </p>
        </CardContent>
        <img
          src={Electronic}
          alt="Lottery Diamond"
          className="h-20 w-20 flex-shrink-0 object-contain"
        />
      </Card>
    </div>
  );
};

export default HomeBody;
