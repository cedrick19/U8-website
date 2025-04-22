interface GameContents {
  [key: string]: string | number;
}
export interface GridBody {
  gamePlatform: string;
  gameContents: GameContents[];
}

export interface TableRatio {
  gridHeader: string[];
  gridBody: GridBody[];
}

export interface RatioTableContent {
  category: string;
  content: TableRatio;
}
