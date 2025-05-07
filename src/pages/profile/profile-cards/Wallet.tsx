import { Fragment, useState } from 'react';
import { Block, Card, CardContent, Link, f7 } from 'framework7-react';

import CoinOff from '@/assets/image/icons/coin-off.svg';
import Refresh2 from '@/assets/image/icons/refresh_2.svg';
import { f7navigate } from '@/utils/helper';

const Wallet = () => {
  const [isVisibile, setIsVisibile] = useState<boolean>(false);
  const bal = 0;
  const renderWalletCard = () => {
    return (
      <Card className="border-2 border-white bg-primary-gradient shadow-md shadow-[#d4caf9]" raised>
        <CardContent className="py-5">
          <div className="flex w-full items-center gap-2">
            <p className="text-md w-full text-center text-white">Wallet Balance</p>
            <Link
              iconMaterial={isVisibile ? 'visibility' : 'visibility_off'}
              color="white"
              iconSize={20}
              rippleColor="none"
              className="absolute left-[66%] !h-[15px] overflow-hidden"
              onClick={() => setIsVisibile((prev) => !prev)}
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <p className="text-2xl text-white">
              {isVisibile ? bal.toFixed(2) : bal.toFixed(2).replace(/\d/g, '*')}
            </p>
            <Link
              iconMaterial="chevron_right"
              color="white"
              iconSize={30}
              rippleColor="none"
              className="absolute left-[57%] !h-[20px] !w-[20px] overflow-hidden"
              onClick={() => f7.view.main.router.navigate('my-wallet/')}
            />
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
