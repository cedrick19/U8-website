interface RatioContent {
  backToTheWaterLadder: string;
  totalNumberOfYards: number;
  waterReturnRatio: number;
}
interface LotteryContent {
  typeOfSubPlay: string;
  cumulativeNumberOfDecoding: string;
  backwater: number;
}

export type GameContent = LotteryContent[] | RatioContent[];
export interface GridBody {
  gamePlatform: string;
  gameContents: GameContent;
}

export interface TableRatio {
  gridHeader: string[];
  gridBody: GridBody[];
}

export interface RatioTableContent {
  category: string;
  content?: GridBody[];
}
export interface TableArray {
  [key: string]: object[];
}
export interface TableIndex {
  [key: string]: number;
}
