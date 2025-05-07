export interface Category {
  id: number;
  name: string;
  image: string;
  color: string;
  route: string;
  className?: string;
}

export interface TopCard {
  id: string;
  title: string;
  image: string;
  route: string;
  fullWidth?: boolean;
}
