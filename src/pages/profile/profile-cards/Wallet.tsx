import { f7navigate } from '@/utils/helper';
import { Block, Card, CardContent, Icon, Link, f7 } from 'framework7-react';
import CoinOff from '@/assets/image/icons/coin-off.svg';
import Refresh2 from '@/assets/image/icons/refresh_2.svg';
import { Fragment } from 'react';

const Wallet = () => {
  const renderWalletCard = () => {
    return (
      <Card
        className="z-10 border-2 border-white bg-primary-gradient shadow-md shadow-[#d4caf9]"
        raised
      >
        <CardContent className="py-5">
          <div className="flex w-full items-center justify-center gap-2">
            <p className="text-md text-center text-white">Wallet Balance</p>
            <Icon material="visibility_on" color="white" size={20} />
          </div>

          <div
            className="mx-auto flex w-fit items-center justify-center"
            onClick={() => f7.view.main.router.navigate('my-wallet/')}
          >
            <p className="text-center text-2xl text-white">0.00</p>
            <Icon material="chevron_right" color="white" size={30} />
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderFooter = () => {
    return (
      <Block className="flex items-center justify-center gap-5">
        <Link className="flex gap-2 font-bold" href="/recharge/">
          <img
            src={CoinOff}
            alt="recharge"
            className="h-5 w-5 cursor-pointer rounded-full bg-primary-gradient p-[2.4px]"
          />
          <p>Recharge</p>
        </Link>
        <Block className="h-8 border-[1px] border-slate-300 p-0" />
        <Block className="flex font-bold">
          <Link
            className="flex items-center gap-2"
            id="refresh"
            onClick={() => f7navigate('refresh', 'refresh/')}
          >
            <img
              src={Refresh2}
              alt="refresh"
              className="h-5 w-5 cursor-pointer rounded-full bg-primary-gradient p-[3px]"
            />
            <p>Refresh</p>
          </Link>
        </Block>
      </Block>
    );
  };
  return (
    <Fragment>
      {renderWalletCard()}
      {renderFooter()}
    </Fragment>
  );
};

export default Wallet;
