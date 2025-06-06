import HomeOn from '@/assets/image/icons/home-on.svg';
import HomeOff from '@/assets/image/icons/home-off.svg';
import GamesOn from '@/assets/image/icons/games-on.svg';
import GamesOff from '@/assets/image/icons/games-off.svg';
import ActivityOn from '@/assets/image/icons/activity-on.svg';
import ActivityOff from '@/assets/image/icons/activity-off.svg';
import ProfileOn from '@/assets/image/icons/profile-on.svg';
import ProfileOff from '@/assets/image/icons/profile-off.svg';
import { f7 } from 'framework7-react';
import { Dispatch, SetStateAction } from 'react';
import { getDevice } from 'framework7';

export const MobileNavItems = [
  {
    tabLink: 'home',
    text: 'Home',
    icons: {
      iconOn: HomeOn,
      iconOff: HomeOff,
    },
  },
  {
    tabLink: 'games',
    text: 'Games',
    icons: {
      iconOn: GamesOn,
      iconOff: GamesOff,
    },
  },
  {
    tabLink: 'activity',
    text: 'Activity',
    icons: {
      iconOn: ActivityOn,
      iconOff: ActivityOff,
    },
  },
  {
    tabLink: 'profile',
    text: 'Profile',
    icons: {
      iconOn: ProfileOn,
      iconOff: ProfileOff,
    },
  },
];

export const toolBarUrl = ['/', '/games/', '/activity/', '/profile/', '/recharge/'];
export const deskNavUrl = [
  '/',
  '/games/lottery/',
  '/games/sports/',
  '/games/video/',
  '/games/electronic/',
  '/games/chess/',
  '/games/fishing/',
  '/activity/',
];

export const routes = [
  { path: '/', name: 'Home' },
  {
    path: '/games/lottery/',
    name: 'Lottery',
  },
  {
    path: '/games/sports/',
    name: 'Sports',
  },
  {
    path: '/games/video/',
    name: 'Video',
  },
  {
    path: '/games/electronic/',
    name: 'Electronic',
  },
  {
    path: '/games/chess/',
    name: 'Chess',
  },
  {
    path: '/games/fishing/',
    name: 'Fishing',
  },
  {
    path: '/activity/',
    name: 'Activities',
  },
];

const isMobile = getDevice().android || getDevice().ios ? toolBarUrl : deskNavUrl;

const handleNavSetting = (urlMap: string[], url?: string, prevUrl?: string) => {
  const foobar = urlMap.find((item) => item !== '/' && url?.includes(item));
  const tabIndex = localStorage.getItem('activeTabIndex');
  const currIndex = url !== '/' ? urlMap.findIndex((item) => item === (foobar ?? prevUrl)) : 0;
  return {
    foobar,
    tabIndex,
    currIndex,
  };
};

export const handleToolbar = (setUrl: Dispatch<SetStateAction<string>>) => {
  f7.view.main.router.on('routeChange', (newRoute, previousRoute) => {
    const { foobar, tabIndex, currIndex } = handleNavSetting(
      isMobile,
      newRoute.url,
      previousRoute.url,
    );
    localStorage.setItem('activeTabIndex', String(currIndex));
    setUrl(foobar ? foobar : isMobile[Number(tabIndex)]);
  });

  f7.view.main.router.on('pageInit', () => {
    const { tabIndex } = handleNavSetting(isMobile);
    setUrl(isMobile[Number(tabIndex)]);
  });

  return () => {
    f7.view.main.router.off('routeChange', (newRoute, previousRoute) => {
      const { foobar, tabIndex } = handleNavSetting(isMobile, newRoute.url, previousRoute.url);
      setUrl(foobar ? foobar : isMobile[Number(tabIndex)]);
    });
  };
};
