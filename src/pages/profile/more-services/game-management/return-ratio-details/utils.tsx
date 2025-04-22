import { GridBody, RatioTableContent } from './type';

export const returnRatioCategory = [
  {
    labelKey: 'ratioOption',
    popUpId: 'game',
    options: ['Video', 'Lottery ticket', 'Poker', 'Electronic', 'Sports', 'Fishing'],
  },
];
export const lotteryTicketCategory = [
  {
    labelKey: 'lotteryOption',
    popUpId: 'lotto',
    options: [
      'Canada 5.0',
      'Canada Baccarat',
      'Hongkong Mark Six Lottery',
      'Canadian Beef',
      'Canada 4.2-4.6',
      'Canadian Network Disk',
      'Canadian Onchboard 996',
      'Canada Full Ads VIP Room',
      'Canada 2.8',
    ],
  },
];

export const gridHeader: string[] = [
  'Game Platform',
  'Back to the water ladder',
  'Total number of yards',
  'Water return ratio',
];

export const lotteryHeader: string[] = [
  'Type of play',
  'Type of subplay',
  'Cumulative number of decoding',
  'Backwater',
];

export const videoBody: GridBody[] = [
  {
    gamePlatform: 'COG Video',
    gameContents: [
      { waterReturnRatio: 0.5 },
      { waterReturnRatio: 0.6 },
      { waterReturnRatio: 0.7 },
      { waterReturnRatio: 0.8 },
      { waterReturnRatio: 0.9 },
      { waterReturnRatio: 0.9 },
    ],
  },
  {
    gamePlatform: 'Jinghe Video',
    gameContents: [
      { waterReturnRatio: 0.5 },
      { waterReturnRatio: 0.6 },
      { waterReturnRatio: 0.7 },
      { waterReturnRatio: 0.8 },
      { waterReturnRatio: 0.9 },
      { waterReturnRatio: 0.9 },
    ],
  },
];
export const pokerBody: GridBody[] = [
  {
    gamePlatform: 'SQP chessboard',
    gameContents: [
      { waterReturnRatio: 0.5 },
      { waterReturnRatio: 0.6 },
      { waterReturnRatio: 0.7 },
      { waterReturnRatio: 0.8 },
      { waterReturnRatio: 0.9 },
      { waterReturnRatio: 0.9 },
    ],
  },
];
export const electronicBody: GridBody[] = [
  {
    gamePlatform: 'Fb ??',
    gameContents: [{ waterReturnRatio: 0.75 }],
  },
  {
    gamePlatform: 'IM ??',
    gameContents: [{ waterReturnRatio: 0.75 }],
  },
];
export const sportsBody: GridBody[] = [
  {
    gamePlatform: 'PG ??',
    gameContents: [{ waterReturnRatio: 0.75 }],
  },
  {
    gamePlatform: 'Pragmatic Play ??',
    gameContents: [{ waterReturnRatio: 0.75 }],
  },
];
export const fishingBody: GridBody[] = [
  {
    gamePlatform: 'Special code integration',
    gameContents: [{ typeOfplay: 0.75 }],
  },
  {
    gamePlatform: 'JDB fishing ??',
    gameContents: [{ waterReturnRatio: 0.75 }],
  },
];

export const lotteryBody: GridBody[] = [
  {
    gamePlatform: 'Special code integration',
    gameContents: [{ waterReturnRatio: 0.75 }],
  },
  {
    gamePlatform: 'Three bit',
    gameContents: [{ waterReturnRatio: 0.75 }],
  },
  {
    gamePlatform: '',
    gameContents: [{ waterReturnRatio: 0.75 }],
  },
];

export const lotteryContent: RatioTableContent[] = [
  {
    category: 'Canada 5.0',
    content: {
      gridHeader: lotteryHeader,
      gridBody: lotteryBody,
    },
  },
  {
    category: 'Canada Baccarat',
    content: {
      gridHeader: lotteryHeader,
      gridBody: videoBody,
    },
  },
  {
    category: 'Hongkong Mark Six Lottery',
    content: {
      gridHeader: lotteryHeader,
      gridBody: pokerBody,
    },
  },
  {
    category: 'Canadian Beef',
    content: {
      gridHeader: lotteryHeader,
      gridBody: electronicBody,
    },
  },
  {
    category: 'Canada 4.2-4.6',
    content: {
      gridHeader: lotteryHeader,
      gridBody: sportsBody,
    },
  },
  {
    category: 'Canadian Network Disk',
    content: {
      gridHeader: lotteryHeader,
      gridBody: fishingBody,
    },
  },
  {
    category: 'Canadian Onchboard 996',
    content: {
      gridHeader: lotteryHeader,
      gridBody: fishingBody,
    },
  },
  {
    category: 'Canada Full Ads VIP Room',
    content: {
      gridHeader: lotteryHeader,
      gridBody: fishingBody,
    },
  },
  {
    category: 'Canada 2.8',
    content: {
      gridHeader: gridHeader,
      gridBody: fishingBody,
    },
  },
];
export const returnRatioContent: RatioTableContent[] = [
  {
    category: 'Video',
    content: {
      gridHeader: gridHeader,
      gridBody: videoBody,
    },
  },
  {
    category: 'Lottery ticket',
    content: {
      gridHeader: gridHeader,
      gridBody: videoBody,
    },
  },
  {
    category: 'Poker',
    content: {
      gridHeader: gridHeader,
      gridBody: pokerBody,
    },
  },
  {
    category: 'Electronic',
    content: {
      gridHeader: gridHeader,
      gridBody: electronicBody,
    },
  },
  {
    category: 'Sports',
    content: {
      gridHeader: gridHeader,
      gridBody: sportsBody,
    },
  },
  {
    category: 'Fishing',
    content: {
      gridHeader: gridHeader,
      gridBody: fishingBody,
    },
  },
];
