import { Block, Card, CardContent, CardFooter, Page } from 'framework7-react';
import { NavBar } from '../components';
import { lotteryGames } from '../utils';
import { getDevice } from 'framework7';
import { cn } from '@/globals/utils';

interface ILottery {
  title: string;
}

interface LotteryGameData {
  games: ILottery[];
}
const RenderMobileView = ({ games }: LotteryGameData) => {
  return games.map((game) => (
    <Card raised key={game.title} className="m-0">
      <CardContent padding={false}>
        <img
          className="w-full rounded-t-xl"
          src="https://kk-hongkong-new.dbq9.com/master/h5/icon/加拿大2.8.jpg"
          alt={game.title}
        />
      </CardContent>
      <CardFooter>
        <p className="w-full text-wrap text-center">{game.title}</p>
      </CardFooter>
    </Card>
  ));
};

const RenderDesktopView = ({ games }: LotteryGameData) => {
  return games.map((game) => (
    <Card outline key={game.title}>
      <CardContent padding={false} className="h-52">
        <img
          className="h-full w-full rounded-t-xl"
          src="https://kk-hongkong-new.dbq9.com/master/h5/icon/加拿大2.8.jpg"
          alt={game.title}
        />
      </CardContent>
      <CardFooter>
        <p className="w-full text-wrap text-center">{game.title}</p>
      </CardFooter>
    </Card>
  ));
};

const Lottery = () => {
  const isMobile = getDevice().android || getDevice().ios;
  return (
    <Page name="lottery" className={cn(isMobile && 'bg-[#ECE8F5]')}>
      <NavBar title="Lottery" />

      <Block
        className={cn(
          'p-8" m-0 h-full w-full',
          !isMobile &&
            'bg-[url(https://paosgi.com/_nuxt/lottery-bg.ySCWSaKo.webp)] bg-contain bg-no-repeat',
        )}
      >
        {isMobile ? (
          <div className={cn('grid-gap grid grid-cols-2')}>
            <RenderMobileView games={lotteryGames} />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <Card raised bgColor="white">
              <CardContent>
                <div className={cn('grid-gap container mx-auto grid grid-cols-5')}>
                  <RenderDesktopView games={lotteryGames} />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </Block>
    </Page>
  );
};

export default Lottery;
