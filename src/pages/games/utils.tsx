import { Sports } from './sports/type';

import lottery from '@/assets/image/games/lottery.png';
import video from '@/assets/image/games/video.png';
import electronic from '@/assets/image/games/electronic.png';
import sports from '@/assets/image/games/sports.png';
import fishing from '@/assets/image/games/fishing.png';
import poker from '@/assets/image/games/poker.png';

import sports1 from '@/assets/image/games/sports/sport-1.png';
import sports2 from '@/assets/image/games/sports/sport-2.png';
import sports3 from '@/assets/image/games/sports/sport-3.png';

export const gameInfo = [
  {
    title: 'LOTTERY',
    image: lottery,
    description:
      'There are all kinds of authentic colors, providing various popular lottery tickets',
    route: '/games/lottery/',
  },
  {
    title: 'LIVE VIDEO',
    image: video,
    description: 'Exotic Beauty Dutch Officer Immersive Experience Online Real-Man Interaction.',
    route: '/games/video/',
  },
  {
    title: 'ELECTRONIC',
    image: electronic,
    description: 'Million Prize. Pool. Touch.',
    route: '/games/electronic/',
  },
  {
    title: 'SPORTS',
    image: sports,
    description: 'Numerous exciting options, offering a variety of popular sports betting tickets.',
    route: '/games/sports/',
  },
  {
    title: 'FISHING',
    image: fishing,
    description: 'Explore fishing games, casting your line to catch various fish species.',
    route: '/games/fishing/',
  },
  {
    title: 'POKER',
    image: poker,
    description: 'Dive into the thrilling world of poker, where starategy meets chance.',
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

    image: sports1,
  },
  {
    title: 'Crown Sports',

    image: sports2,
  },
  {
    title: 'Sabah Sports',

    image: sports3,
  },
];
