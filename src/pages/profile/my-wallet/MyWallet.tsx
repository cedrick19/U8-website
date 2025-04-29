import { Block, Button, Card, CardContent, Icon, Link, Page } from 'framework7-react';
import ProfileNav from '../component/ProfileNav';
import ProfileCard from '../component/ProfileCard';
import CoinOff from '@/assets/image/icons/coin-off.svg';
import Refresh from '@/assets/image/svg/refresh.svg';
import SettingItem from '../component/SettingItem';
import { clickNavigate } from '@/globals/utils';

const MyWallet = () => {
  return (
    <Page name="my wallet">
      <ProfileNav title="My Wallet" />
      <ProfileCard>
        <Card
          className="z-10 border-2 border-white bg-primary-gradient shadow-md shadow-[#d4caf9]"
          raised
        >
          <CardContent className="space-y-3 py-5">
            <div className="flex w-full items-center justify-center gap-2">
              <p className="text-md text-center text-white">Wallet Balance</p>
              <Icon material="visibility_on" color="white" size={20} />
            </div>

            <div className="flex w-full items-center justify-center gap-2">
              <p className="ml-[0.5rem] text-center text-2xl text-white">0.00</p>
              <Icon material="cached" color="white" size={25} />
            </div>

            <div className="flex items-center justify-center gap-10">
              <div className="flex-col text-center">
                <div className="flex items-center gap-1">
                  <p className="text-xs text-white">Transferable Amount</p>
                  <Icon material="help_filled" color="white" size={17} />
                </div>
                <p className="font-bold text-white">0.00</p>
              </div>
              <div className="h-8 border-[1px] border-slate-300" />
              <Button
                fill
                bgColor="white"
                className="px-6 py-0"
                {...clickNavigate('a-key', 'a-key/')}
              >
                <p className="text-gradient font-bold">A Key</p>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center gap-5">
          <Link className="flex gap-2 font-bold" href="/recharge/">
            <img
              src={CoinOff}
              alt="recharge"
              className="h-5 w-5 cursor-pointer rounded-full bg-primary-gradient p-[2.4px]"
            />
            <p>Recharge</p>
          </Link>
          <div className="h-8 border-[1px] border-slate-300" />
          <Block className="flex gap-2 font-bold">
            <img
              src={Refresh}
              alt="recharge"
              className="h-5 w-5 cursor-pointer rounded-full bg-primary-gradient p-1"
            />
            <p>Refresh</p>
          </Block>
        </div>
        <Block className="pt-5">
          <Button
            className="rounded-2xl bg-primary-gradient normal-case text-white"
            large
            {...clickNavigate('account-sec-redirect', '/profile/settings/account-security/')}
          >
            Account Security Settings
          </Button>
        </Block>
      </ProfileCard>

      <Block className="m-5 rounded-lg bg-white px-0 shadow-md">
        <SettingItem
          className="rounded-lg rounded-b-none"
          iconLeft="show_chart"
          iconClassName="text-white bg-[#4C236D]"
          label="Funding Details"
          iconRight="chevron_right"
        />
        <div className="ml-4 mr-5 h-0 border-b-2 border-slate-100" />
        <SettingItem
          className="rounded-lg rounded-t-none"
          iconLeft="text_snippet"
          label="Transaction Record"
          iconRight="chevron_right"
        />
      </Block>
    </Page>
  );
};

export default MyWallet;
