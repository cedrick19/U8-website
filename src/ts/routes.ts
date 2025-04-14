import ActivityPage from '@/pages/activity/Activity';
import GamesIndexPage from '@/pages/games';
import Chess from '@/pages/games/chess/Chess';
import Electronic from '@/pages/games/electronic/Electronic';
import Fishing from '@/pages/games/fishing';
import Lottery from '@/pages/games/lottery/Lottery';
import Sports from '@/pages/games/sports';
import VideoPage from '@/pages/games/video';

import HomePage from '@/pages/home';
import AccountSecurity from '@/pages/profile/account-security';
import ProfilePage from '@/pages/profile/ProfilePage';
import Settings from '@/pages/profile/settings/Settings';
import AddVirtualWallet from '@/pages/profile/virtual-address/component/AddVirtualWallet';
import VirtualAddManagement from '@/pages/profile/virtual-address/VirtualAddManagement';

const gameRoutes = [
  {
    path: '/games/',
    name: 'Games',
    component: GamesIndexPage,
  },
  {
    path: '/games/lottery/',
    name: 'Lottery',
    component: Lottery,
  },
  {
    path: '/games/sports/',
    name: 'Sports',
    component: Sports,
  },
  {
    path: '/games/video/',
    name: 'Video',
    component: VideoPage,
  },
  {
    path: '/games/electronic/',
    name: 'Electronic',
    component: Electronic,
  },
  {
    path: '/games/chess/',
    name: 'Chess',
    component: Chess,
  },
  {
    path: '/games/fishing/',
    name: 'Fishing',
    component: Fishing,
  },
];

const profileRoutes = [
  {
    path: '/profile/',
    name: 'Profile',
    component: ProfilePage,
    routes: [
      {
        path: 'settings/',
        name: 'Settings',
        component: Settings,
        routes: [
          {
            path: 'account-security/',
            name: 'Account Security',
            component: AccountSecurity,
            master: true,
            routes: [
              {
                path: 'vam/',
                name: 'Virtual Address Manager',
                component: VirtualAddManagement,
                routes: [
                  {
                    path: ':wallet',
                    name: 'Virtual Address Manager',
                    component: AddVirtualWallet,
                  },
                ],
              },
              {
                path: 'asv/',
                name: 'Advance Security Verification',
                component: AccountSecurity,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const webRoutes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    routes: [
      {
        path: '/activity/',
        name: 'Activity',
        component: ActivityPage,
      },
      ...profileRoutes,
      ...gameRoutes,
    ],
  },
];
