import GamesManagement from '@/assets/image/profile/more-services/game_management.svg';
import FundManagement from '@/assets/image/profile/more-services/fund_management.svg';
import RechargeTutorial from '@/assets/image/profile/more-services/recharge_tutorial.svg';
import ComingSoon from '@/assets/image/profile/more-services/coming_soon.svg';
import { ProfileCardList, Services } from './type';
import Wallet from './profile-cards/Wallet';
import Income from './profile-cards/Income';
import MoreServices from './profile-cards/MoreServices';

export const services: Services[] = [
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

export const income = [
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

export const profileCardList: ProfileCardList[] = [
  {
    title: 'My Wallet',
    profileCard: <Wallet />,
  },
  {
    title: (
      <p>
        Today's Income: <span className="text-gradient">April 7</span>
      </p>
    ),
    profileCard: <Income />,
  },
  {
    title: 'More Services',
    profileCard: <MoreServices />,
  },
];
