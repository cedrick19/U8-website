import { Fragment } from 'react';
import { Button, Card, CardContent, CardHeader } from 'framework7-react';

import { ProfileContainer } from '@/pages/profile/component';

import { MobileNavbar } from '@/components';
import { f7navigate } from '@/utils/helper';

import { gameCatBal } from './utils';

const AKey = () => {
  return (
    <ProfileContainer name="A key">
      <MobileNavbar mode="profile" title="A Key" />
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
              id="a-key"
              bgColor="white"
              className="px-6 py-0"
              onClick={() => f7navigate('a-key', 'a-key/')}
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
    </ProfileContainer>
  );
};

export default AKey;
