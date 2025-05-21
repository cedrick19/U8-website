export interface GameInfoTypes {
  title: string;
  imageHome: string;
  route: string;
  spanTwo?: boolean;
  fullWidth?: boolean;
  isCategory?: boolean;
}

export type UserInfoProps = {
  isEyeOn: boolean;
  toggleEye: () => void;
  isSpinning: boolean;
  RefreshClick: () => void;
};
