import { f7 } from 'framework7-react';
import Video from '@/assets/image/home/live.png';
import Lottery from '@/assets/image/home/lottery.svg';
import Electronic from '@/assets/image/home/electronic.svg';
import Sports from '@/assets/image/home/sports.png';
import Fishing from '@/assets/image/home/fishing.png';
import Poker from '@/assets/image/home/poker.png';
import Chain from '@/assets/image/home/chain.png';
import { Category, TopCard } from './components/type';

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

export const notificationData = [
  {
    message: 'Congratulations to the player c**** in Canada win {price} of game ',
    game: 'Mahjong',
    price: '40000Yuan',
  },
  {
    message: 'Congratulations to the player B**** in Philippines win {price} of game ',
    game: 'Lottery',
    price: '50000Pesos',
  },
];
