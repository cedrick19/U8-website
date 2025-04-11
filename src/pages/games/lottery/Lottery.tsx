import { Block, Button, Card, CardContent, CardFooter, Page } from 'framework7-react';
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

const CardTile = ({ title }: ILottery) => {
  return (
    <Card raised key={title} className="m-0">
      <CardContent padding={false}>
        <img
          className="w-full rounded-t-xl"
          src="https://kk-hongkong-new.dbq9.com/master/h5/icon/加拿大2.8.jpg"
          alt={title}
        />
      </CardContent>
      <CardFooter>
        <p className="w-full text-wrap text-center">{title}</p>
      </CardFooter>
    </Card>
  );
};

const RenderLotteryGames = ({ games }: LotteryGameData) => {
  return games.map((game) => <CardTile key={game.title} title={game.title} />);
};

const Lottery = () => {
  const isMobile = getDevice().android || getDevice().ios;
  return (
    <Page name="lottery" className={cn(isMobile && 'bg-[#ECE8F5]')}>
      <NavBar title="Lottery" />

      <Block
        className={cn(
          'm-0 h-full w-full p-8',
          !isMobile &&
            'bg-[url(https://paosgi.com/_nuxt/lottery-bg.ySCWSaKo.webp)] bg-contain bg-no-repeat',
        )}
      >
        {isMobile ? (
          <div className={cn('grid-gap grid grid-cols-2')}>
            <RenderLotteryGames games={lotteryGames} />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <Card raised bgColor="white" className="container mx-auto">
              <CardContent className="flex flex-col gap-5 p-16">
                <Button raised round className="w-fit bg-primary-gradient text-white">
                  All
                </Button>

                <div className={cn('grid grid-cols-5 gap-5')}>
                  <RenderLotteryGames games={lotteryGames} />
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
