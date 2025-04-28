import { Button, Card, CardContent, CardHeader, Page } from 'framework7-react';
import ProfileNav from '../../component/ProfileNav';
import { clickNavigate } from '@/globals/utils';
import { Fragment } from 'react';

const AKey = () => {
  const gameCatBal = [
    {
      gameCategory: 'COG Video',
      balance: '0.00',
    },
    {
      gameCategory: 'Jinghe Video',
      balance: '0.00',
    },
    {
      gameCategory: 'SQP Chessboard',
      balance: '0.00',
    },
  ];
  return (
    <Page name="A key">
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <ProfileNav title="A Key" />
      <Card
        className="z-10 border-2 border-white bg-primary-gradient shadow-md shadow-[#d4caf9]"
        raised
      >
        <CardContent className="space-y-3 py-5">
          <p className="text-md text-center text-white">Wallet Balance</p>

          <p className="text-center text-2xl font-bold text-white">0.00</p>

          <div className="flex-col items-center justify-center space-y-5">
            <div className="flex-col text-center">
              <p className="text-xs text-white">Transferable Amount</p>
              <p className="font-bold text-white">0.00</p>
            </div>
            <Button
              fill
              bgColor="white"
              className="px-6 py-0"
              {...clickNavigate('a-key', 'a-key/')}
              disabled
            >
              <p className="text-gradient font-bold">A Key</p>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white" raised>
        <CardHeader className="grid grid-cols-5 gap-3 bg-primary-gradient">
          <p className="col-span-3 font-bold text-white">Game Category</p>
          <p className="font-bold text-white">Balance</p>
        </CardHeader>
        <CardContent className="space-y-3">
          {gameCatBal.map((data, index) => (
            <Fragment key={index}>
              <div className="grid grid-cols-5 gap-3">
                <p className="col-span-3">{data.gameCategory}</p>
                <p className="font-bold">{data.balance}</p>
              </div>
              {index != gameCatBal.length - 1 && <div className="w-full border-[1px]" />}
            </Fragment>
          ))}
        </CardContent>
      </Card>
    </Page>
  );
};

export default AKey;
