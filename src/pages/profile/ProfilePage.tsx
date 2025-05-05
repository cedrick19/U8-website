import { Page, Block, Card, CardContent, f7, Icon, Link, Button } from 'framework7-react';
import ProfileCard from './component/ProfileCard';
import GamesManagement from '@/assets/image/profile/more-services/game_management.svg';
import FundManagement from '@/assets/image/profile/more-services/fund_management.svg';
import RechargeTutorial from '@/assets/image/profile/more-services/recharge_tutorial.svg';
import Share from '@/assets/image/profile/more-services/share.svg';
import ComingSoon from '@/assets/image/profile/more-services/coming_soon.svg';
import AvatarIcon from '@/assets/image/icons/avatarIcon.png';
import CoinOff from '@/assets/image/icons/coin-off.svg';
import Refresh2 from '@/assets/image/icons/refresh_2.svg';
import HomeNavbar from '@/components/mobile-navbar/HomeNavbar';
import Copy from '@/assets/image/profile/settings/accnum_and_sec/copy.svg';
import { f7navigate } from '@/utils/helper';
import { Fragment, useState } from 'react';
import { store } from '@/ts/store';
import CustomPopUp from './component/CustomPopUp';
import ShareImg from '@/assets/image/profile/more-services/share.png';

export interface Services {
  id?: string;
  icon: string;
  label: string;
}

interface CopySubLabel {
  subLabel: string;
  isCopied: boolean;
}

const services: Services[] = [
  {
    id: 'game-management',
    icon: GamesManagement,
    label: 'Game Management',
  },
  {
    id: 'fund-management',
    icon: FundManagement,
    label: 'Fund Management',
  },
  {
    id: 'recharge-tutorial',
    icon: RechargeTutorial,
    label: 'Recharge Tutorial',
  },
  {
    icon: ComingSoon,
    label: 'Coming Soon',
  },
];

const income = [
  {
    value: 0,
    label: 'Number of Statements',
    activeTab: 0,
  },
  {
    value: 0,
    label: 'Total profit and loss',
    activeTab: 1,
  },
  {
    value: 0,
    label: 'Real-time water return',
    activeTab: 2,
  },
];

const ProfilePage = () => {
  const { dispatch } = store;
  const [openShare, setOpenShare] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [subCopy, setSubCopy] = useState<CopySubLabel>({
    subLabel: 'beluga.cat07',
    isCopied: false,
  });

  const handleNavigate = (activeTab: number, index: number) => {
    dispatch('setGameActiveState', activeTab);
    f7navigate(`index-${index}`, 'game-management/');
  };
  const handleCopy = async () => {
    if (!subCopy.isCopied) {
      await navigator.clipboard.writeText(subCopy.subLabel);
      setSubCopy({ ...subCopy, isCopied: true });

      setTimeout(() => {
        setSubCopy({ ...subCopy, isCopied: false });
      }, 10000);
    }
  };
  return (
    <Page name="profile">
      <HomeNavbar
        navRight={
          <>
            <Link
              id="notifications"
              href="/notifications/"
              onClick={() => {
                document.getElementById('notifications')?.blur();
              }}
            >
              <Icon material="notifications" size={35} className="text-gradient" />
            </Link>
            <div onClick={() => f7.view.main.router.navigate('settings/')}>
              <Icon material="settings" size={30} className="text-gradient" />
            </div>
          </>
        }
      />
      <Block className="flex h-16 items-center">
        <img
          alt="Avatar"
          slot="media"
          src={AvatarIcon}
          className="h-16 w-16 rounded-full bg-blue-500"
        />
        <Block className="flex-col gap-1">
          <p className="text-lg">beluga.cat</p>
          <div className="flex items-center">
            <p className="text-xs">Member Account: {subCopy.subLabel}</p>
            {subCopy.isCopied ? (
              <Icon f7="checkmark" size={15} />
            ) : (
              <img src={Copy} onClick={handleCopy} className="h-4 w-4" />
            )}
          </div>
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
              className="mx-auto flex w-fit items-center justify-center"
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
              onClick={() => f7navigate('refresh', 'refresh/')}
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
            Today's Income: <span className="text-gradient">April 7</span>
          </p>
        }
      >
        <Card className="z-10 border-2 border-white bg-[#ECE8F5] shadow-md shadow-[#d4caf9]" raised>
          <CardContent className="flex items-start justify-center gap-5 py-10">
            {income.map(({ value, label, activeTab }, index) => (
              <Fragment key={index}>
                <Link
                  className="flex-col"
                  id={`index-${index}`}
                  onClick={() => handleNavigate(activeTab, index)}
                >
                  <p className="text-center text-sm font-bold text-[#4A4A4A]">
                    {value.toFixed(index === 0 ? 0 : 2)} <span>&gt;</span>
                  </p>
                  <p className="text-gradient text-center text-xs">{label}</p>
                </Link>
                {income.length - 1 !== index && (
                  <div className="h-16 border-[1px] border-slate-300" />
                )}
              </Fragment>
            ))}
          </CardContent>
        </Card>
      </ProfileCard>

      <ProfileCard pCardTitle="More Services" className="mb-24">
        <Block className="grid grid-cols-3 gap-5 px-10 py-5">
          {services.map((data, index) => (
            <Fragment key={index}>
              <Link
                id={data.id}
                className="flex-col justify-items-center"
                onClick={() => f7navigate(`${data.id}`, `${data.id}/`)}
              >
                <img alt={data.label} src={data.icon} className="h-10 w-10" />
                <p className="text-center">{data.label}</p>
              </Link>
              {index === 2 && (
                <Link onClick={() => setOpenShare(true)} className="flex-col justify-items-center">
                  <img alt="Share" src={Share} className="h-10 w-10" />
                  <p className="text-center">Share</p>
                </Link>
              )}
            </Fragment>
          ))}
        </Block>
      </ProfileCard>

      <CustomPopUp open={openShare} clAction={() => setOpenShare(false)} title="">
        <img src={ShareImg} className="w-full justify-self-center rounded-2xl" />

        <div className="flex w-full flex-row gap-2">
          <Button
            className="text-gradient h-14 w-full rounded-xl border border-secondary bg-inherit normal-case"
            onClick={() => {
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
                setOpenShare(false);
              }, 1500);
            }}
          >
            {copied ? 'Copied!' : 'Copy link'}
          </Button>
          <Button
            className="h-14 w-full rounded-xl bg-primary-gradient normal-case text-white"
            onClick={() => setOpenShare(false)}
          >
            Save
          </Button>
        </div>
      </CustomPopUp>
    </Page>
  );
};

export default ProfilePage;
