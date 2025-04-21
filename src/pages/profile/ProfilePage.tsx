import { Page, Block, Card, CardContent, f7, Icon, Link } from 'framework7-react';
import ProfileCard from './component/ProfileCard';
import GamesManagement from '@/assets/image/icons/game_management.svg';
import FundManagement from '@/assets/image/icons/fund_management.svg';
import RechargeTutorial from '@/assets/image/icons/recharge_tutorial.svg';
import Share from '@/assets/image/icons/share.svg';
import ComingSoon from '@/assets/image/icons/coming_soon.svg';
import AvatarIcon from '@/assets/image/avatarIcon.png';
import CoinOff from '@/assets/image/icons/coin-off.svg';
import Refresh2 from '@/assets/image/icons/refresh_2.svg';
import HomeNavbar from '@/components/MobileNavbar/HomeNavbar';
import { clickNavigate } from '@/globals/utils';

export interface Services {
  id?: string;
  icon: string;
  label: string;
}

const services: Services[] = [
  {
    icon: GamesManagement,
    label: 'Game Management',
  },
  {
    id: 'fund-management',
    icon: FundManagement,
    label: 'Fund Management',
  },
  {
    icon: RechargeTutorial,
    label: 'Recharge Tutorial',
  },
  {
    icon: Share,
    label: 'Share',
  },
  {
    icon: ComingSoon,
    label: 'Coming Soon',
  },
];

const ProfilePage = () => {
  return (
    <Page name="profile">
      <HomeNavbar
        navRight={
          <>
            <Icon material="notifications" size={30} className="text-[#4A226E]" />
            <div onClick={() => f7.view.main.router.navigate('settings/')}>
              <Icon material="settings" size={30} className="text-[#4A226E]" />
            </div>
          </>
        }
      />
      <Block className="flex h-16 items-center">
        <img slot="media" src={AvatarIcon} className="h-16 w-16 rounded-full bg-blue-500" />
        <Block className="flex-col gap-1">
          <p className="text-lg">beluga.cat</p>
          <p className="text-xs">Member Account: beluga.cat07</p>
        </Block>
      </Block>
      <ProfileCard
        refresh
        pCardTitle="My Wallet"
        className="relative bg-[#ECE8F5] py-5 shadow-[#E1DCF3]"
      >
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
              className="flex w-full items-center justify-center"
              onClick={() => f7.view.main.router.navigate('my-wallet/')}
            >
              <p className="text-center text-2xl text-white">0.00</p>
              <Icon material="chevron_right" color="white" size={30} />
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
          <Block className="flex font-bold">
            <Link
              className="flex items-center gap-2"
              id="refresh"
              onClick={() => {
                document.getElementById('refresh')?.blur();
                f7.view.main.router.navigate('refresh/');
              }}
            >
              <div className="h-5 w-5 cursor-pointer rounded-full bg-primary-gradient p-1">
                <img src={Refresh2} alt="refresh" className="h-full w-full" />
              </div>
              <p>Refresh</p>
            </Link>
          </Block>
        </div>
      </ProfileCard>

      <ProfileCard
        refresh
        pCardTitle={
          <p>
            Today's Income: <span className="text-[#3B1E7A]">April 7</span>
          </p>
        }
      >
        <Card className="z-10 border-2 border-white bg-[#ECE8F5] shadow-md shadow-[#d4caf9]" raised>
          <CardContent className="flex items-center justify-center gap-5 py-10">
            <Block className="">
              <p className="text-center text-2xl font-bold text-[#4A4A4A]">0 &gt;</p>
              <p className="text-md text-center text-[#3B1E7A]">Nubmer of Statements</p>
            </Block>
            <div className="h-16 border-[1px] border-slate-300" />
            <Block className="">
              <p className="text-center text-xl font-bold text-[#4A4A4A]">0.00 &gt;</p>
              <p className="text-md text-center text-[#3B1E7A]">Total profit and loss</p>
            </Block>
            <div className="h-16 border-[1px] border-slate-300" />
            <Block className="">
              <p className="text-center text-xl font-bold text-[#4A4A4A]">0.00 &gt;</p>
              <p className="text-md text-center text-[#3B1E7A]">Real-time water return</p>
            </Block>
          </CardContent>
        </Card>
      </ProfileCard>

      <ProfileCard pCardTitle="More Services" className="mb-24">
        <Block className="grid grid-cols-3 gap-5 px-10 py-5">
          {services.map((data, index) => (
            <Link
              key={index}
              className="flex-col justify-items-center"
              {...clickNavigate(`${data.id}`, `${data.id}/`)}
            >
              <img src={data.icon} className="h-10 w-10" />
              <p className="text-center">{data.label}</p>
            </Link>
          ))}
        </Block>
      </ProfileCard>
    </Page>
  );
};

export default ProfilePage;
