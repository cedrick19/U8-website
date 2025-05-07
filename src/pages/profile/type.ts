import { ReactNode } from 'react';

export interface Services {
  id?: string;
  icon: string;
  label: string;
}

export interface CopySubLabel {
  subLabel: string;
  isCopied: boolean;
}

export interface ProfileCardList {
  title: ReactNode;
  profileCard: ReactNode;
}
