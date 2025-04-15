import { f7 } from 'framework7-react';
import Video from '@/assets/image/homebody/live.png';
import Lottery from '@/assets/image/homebody/lottery.svg';
import Electronic from '@/assets/image/homebody/electronic.svg';
import Sports from '@/assets/image/homebody/sports.png';
import Fishing from '@/assets/image/homebody/fishing.png';
import Poker from '@/assets/image/homebody/poker.png';
import Chain from '@/assets/image/homebody/chain.png';

export interface TopCard {
  id: string;
  title: string;
  image: string;
  route: string;
  fullWidth?: boolean;
}

export const topCards: TopCard[] = [
  {
    id: 'live',
    title: 'LIVE VIDEO',
    image: Video,
    route: '/games/video/',
  },
  {
    id: 'lottery',
    title: 'LOTTERY TICKET',
    image: Lottery,
    route: '/games/lottery/',
  },
  {
    id: 'electronic',
    title: 'ELECTRONIC GAMES',
    image: Electronic,
    route: '/games/electronic/',
    fullWidth: true,
  },
];

export interface Category {
  id: number;
  name: string;
  image: string;
  color: string;
  route?: string;
  className?: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Sports',
    image: Sports,
    color: 'bg-[#3a1e7a]',
    route: '/games/sports/',
  },
  {
    id: 2,
    name: 'Fishing',
    image: Fishing,
    color: 'bg-[#3a1e7a]',
    route: '/games/fishing/',
  },
  {
    id: 3,
    name: 'Poker',
    image: Poker,
    color: 'bg-[#3a1e7a]',
    route: '/games/poker/',
  },
  {
    id: 4,
    name: 'Chain',
    image: Chain,
    color: 'bg-[#3a1e7a]',
    route: '/games/chain/',
  },
];

export const navigateToRoute = (route: string) => {
  if (route) {
    f7.view.main.router.navigate(route);
  }
};
