import { Sports } from './sports/type';

import lottery from '@/assets/image/games/lottery.png';
import video from '@/assets/image/games/video.png';
import electronic from '@/assets/image/games/electronic.png';
import sports from '@/assets/image/games/sports.png';
import fishing from '@/assets/image/games/fishing.png';
import poker from '@/assets/image/games/poker.png';

import sports1 from '@/assets/image/games/sports/sport-1.png';
import sports2 from '@/assets/image/games/sports/sport-3.png';
import sports3 from '@/assets/image/games/sports/sport-3.png';

export const gameInfo = [
  {
    title: 'LOTTERY',
    image: lottery,
    route: '/games/lottery/',
  },
  {
    title: 'LIVE VIDEO',
    image: video,
    route: '/games/video/',
  },
  {
    title: 'ELECTRONIC',
    image: electronic,
    route: '/games/electronic/',
  },
  {
    title: 'SPORTS',
    image: sports,
    route: '/games/sports/',
  },
  {
    title: 'FISHING',
    image: fishing,
    route: '/games/fishing/',
  },
  {
    title: 'POKER',
    image: poker,
    route: '/games/poker/',
  },
];

export const lotteryGames = [
  { title: 'Canada Full Ads' },
  { title: 'Canadian Baccarat' },
  { title: 'Canada 2.8' },
  { title: 'Hongkong Mark Six Lottery ' },
  { title: 'Canadian Beef' },
  { title: 'Canada 4.2-4.6' },
  { title: 'Canadian Online Storage' },
];

export const sportsData: Sports[] = [
  {
    title: 'What Sports',
    description: 'Philippine Regular Casino',
    image: sports1,
  },
  {
    title: 'Crown Sports',
    description: 'Jui Ding',
    image: sports2,
  },
  {
    title: 'Sabah Sports',
    description: 'Jui Ding',
    image: sports3,
  },
];
