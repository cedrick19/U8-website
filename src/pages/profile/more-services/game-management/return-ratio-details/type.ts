export interface GridBody {
  gamePlatform: string;
  gameContents: Record<string, string | number>[];
}

export interface TableRatio {
  gridHeader: string[];
  gridBody: GridBody[];
}

export interface RatioTableContent {
  category: string;
  content?: GridBody[];
}
