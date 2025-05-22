import { Sports } from './sports/type';

import lottery from '@/assets/image/games/lottery.png';
import video from '@/assets/image/games/video.png';
import electronic from '@/assets/image/games/electronic.png';
import sports from '@/assets/image/games/sports.png';
import fishing from '@/assets/image/games/fishing.png';
import poker from '@/assets/image/games/poker.png';

import lotteryHome from '@/assets/image/home/lottery.svg';
import videoHome from '@/assets/image/home/live.png';
import electronicHome from '@/assets/image/home/electronic.svg';
import sportsHome from '@/assets/image/home/sports.png';
import fishingHome from '@/assets/image/home/fishing.png';
import pokerHome from '@/assets/image/home/poker.png';

import sports1 from '@/assets/image/games/sports/sport-1.png';
import sports2 from '@/assets/image/games/sports/sport-2.png';
import sports3 from '@/assets/image/games/sports/sport-3.png';

export const gameInfo = [
  {
    title: 'LOTTERY TICKET',
    image: lottery,
    imageHome: lotteryHome,
    description:
      'There are all kinds of authentic colors, providing various popular lottery tickets',
    route: '/games/lottery/',
    layer: 1,
  },
  {
    title: 'LIVE VIDEO',
    image: video,
    imageHome: videoHome,
    description: 'Exotic Beauty Dutch Officer Immersive Experience Online Real-Man Interaction.',
    route: '/games/video/',
    layer: 1,
  },
  {
    title: 'ELECTRONIC GAMES',
    image: electronic,
    imageHome: electronicHome,
    description: 'Million Prize. Pool. Touch.',
    route: '/games/electronic/',
    fullWidth: true,
    layer: 1,
  },
  {
    title: 'SPORTS',
    image: sports,
    imageHome: sportsHome,
    description: 'Numerous exciting options, offering a variety of popular sports betting tickets.',
    route: '/games/sports/',
    layer: 2,
  },
  {
    title: 'FISHING',
    image: fishing,
    imageHome: fishingHome,
    description: 'Explore fishing games, casting your line to catch various fish species.',
    route: '/games/fishing/',
    layer: 2,
  },
  {
    title: 'POKER',
    image: poker,
    imageHome: pokerHome,
    description: 'Dive into the thrilling world of poker, where strategy meets chance.',
    route: '/games/poker/',
    layer: 2,
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
