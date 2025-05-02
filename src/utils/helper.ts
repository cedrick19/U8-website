import { clsx, type ClassValue } from 'clsx';
import { f7 } from 'framework7-react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const clickNavigate = (id: string, url: string) => {
  return {
    id: id,
    onClick: () => {
      document.getElementById(id)?.blur();
      f7.view.main.router.navigate(url);
    },
  };
};

export const f7navigate = (id: string, url: string): void => {
  document.getElementById(id)?.blur();
  f7.view.main.router.navigate(url);
};
