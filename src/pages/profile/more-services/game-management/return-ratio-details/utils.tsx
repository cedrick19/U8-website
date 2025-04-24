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
      { backToTheWaterLadder: 'THE', totalNumberOfYards: 5000, waterReturnRatio: 0.5 },
      { backToTheWaterLadder: 'E', totalNumberOfYards: 10000, waterReturnRatio: 0.4 },
    ],
  },
  {
    gamePlatform: 'Jinghe Video',
    gameContents: [
      { backToTheWaterLadder: 'A', totalNumberOfYards: 20000, waterReturnRatio: 0.3 },
      { backToTheWaterLadder: 'T', totalNumberOfYards: 40000, waterReturnRatio: 0.2 },
    ],
  },
];
export const pokerBody: GridBody[] = [
  {
    gamePlatform: 'SQP chessboard',
    gameContents: [
      { backToTheWaterLadder: 'A', totalNumberOfYards: 20000, waterReturnRatio: 0.3 },
      { backToTheWaterLadder: 'T', totalNumberOfYards: 40000, waterReturnRatio: 0.2 },
    ],
  },
];
export const electronicBody: GridBody[] = [
  {
    gamePlatform: 'Fb ??',
    gameContents: [
      { backToTheWaterLadder: 'A', totalNumberOfYards: 20000, waterReturnRatio: 0.3 },
      { backToTheWaterLadder: 'T', totalNumberOfYards: 40000, waterReturnRatio: 0.2 },
    ],
  },
  {
    gamePlatform: 'IM ??',
    gameContents: [
      { backToTheWaterLadder: 'A', totalNumberOfYards: 20000, waterReturnRatio: 0.3 },
      { backToTheWaterLadder: 'T', totalNumberOfYards: 40000, waterReturnRatio: 0.2 },
    ],
  },
];
export const sportsBody: GridBody[] = [
  {
    gamePlatform: 'PG ??',
    gameContents: [
      { backToTheWaterLadder: 'A', totalNumberOfYards: 20000, waterReturnRatio: 0.3 },
      { backToTheWaterLadder: 'T', totalNumberOfYards: 40000, waterReturnRatio: 0.2 },
    ],
  },
  {
    gamePlatform: 'Pragmatic Play ??',
    gameContents: [
      { backToTheWaterLadder: 'A', totalNumberOfYards: 20000, waterReturnRatio: 0.3 },
      { backToTheWaterLadder: 'T', totalNumberOfYards: 40000, waterReturnRatio: 0.2 },
    ],
  },
];
export const fishingBody: GridBody[] = [
  {
    gamePlatform: 'Special code integration',
    gameContents: [
      { backToTheWaterLadder: 'A', totalNumberOfYards: 20000, waterReturnRatio: 0.3 },
      { backToTheWaterLadder: 'T', totalNumberOfYards: 40000, waterReturnRatio: 0.2 },
    ],
  },
  {
    gamePlatform: 'JDB fishing ??',
    gameContents: [
      { backToTheWaterLadder: 'A', totalNumberOfYards: 20000, waterReturnRatio: 0.3 },
      { backToTheWaterLadder: 'T', totalNumberOfYards: 40000, waterReturnRatio: 0.2 },
    ],
  },
];

export const lotteryBody: GridBody[] = [
  {
    gamePlatform: 'Special code integration',
    gameContents: [
      { typeOfSubPlay: 'Big and small', cumulativeNumberOfDecoding: '-', backwater: 2.6 },
      { typeOfSubPlay: 'combination', cumulativeNumberOfDecoding: '-', backwater: 2.6 },
      { typeOfSubPlay: 'Very small', cumulativeNumberOfDecoding: '-', backwater: 2.6 },
    ],
  },
  {
    gamePlatform: 'Three bit',
    gameContents: [
      { typeOfSubPlay: 'Race', cumulativeNumberOfDecoding: '-', backwater: 2.6 },
      { typeOfSubPlay: 'Race', cumulativeNumberOfDecoding: '-', backwater: 2.6 },
      { typeOfSubPlay: 'Race', cumulativeNumberOfDecoding: '-', backwater: 2.6 },
    ],
  },
  {
    gamePlatform: '',
    gameContents: [
      { typeOfSubPlay: '0', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '27', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '1', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '26', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '2', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '25', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '24', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '3', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '23', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '4', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '22', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '5', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
      { typeOfSubPlay: '21', cumulativeNumberOfDecoding: '-', backwater: 0.4 },
    ],
  },
];

export const lotteryContent: RatioTableContent[] = [
  {
    category: 'Canada 5.0',
    content: lotteryBody,
  },
  {
    category: 'Canada Baccarat',
  },
  {
    category: 'Hongkong Mark Six Lottery',
    content: lotteryBody,
  },
  {
    category: 'Canadian Beef',
    content: lotteryBody,
  },
  {
    category: 'Canada 4.2-4.6',
    content: lotteryBody,
  },
  {
    category: 'Canadian Network Disk',
    content: lotteryBody,
  },
  {
    category: 'Canadian Onchboard 996',
    content: lotteryBody,
  },
  {
    category: 'Canada Full Ads VIP Room',
    content: lotteryBody,
  },
  {
    category: 'Canada 2.8',
    content: lotteryBody,
  },
];
export const returnRatioContent: RatioTableContent[] = [
  {
    category: 'Video',
    content: videoBody,
  },
  {
    category: 'Lottery ticket',
    content: pokerBody,
  },
  {
    category: 'Poker',
    content: pokerBody,
  },
  {
    category: 'Electronic',
    content: electronicBody,
  },
  {
    category: 'Sports',
    content: sportsBody,
  },
  {
    category: 'Fishing',
    content: fishingBody,
  },
];
