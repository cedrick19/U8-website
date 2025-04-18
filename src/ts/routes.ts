import ActivityPage from '@/pages/activity/Activity';
import GamesIndexPage from '@/pages/games';
import Chess from '@/pages/games/chess/Chess';
import Electronic from '@/pages/games/electronic/Electronic';
import Fishing from '@/pages/games/fishing';
import Lottery from '@/pages/games/lottery/Lottery';
import Sports from '@/pages/games/sports';
import VideoPage from '@/pages/games/video';

import HomePage from '@/pages/home';
import AccountSecurity from '@/pages/profile/settings/account-security';
import AdvanceSecVerification from '@/pages/profile/settings/advance-security-verification/AdvanceSecVerification';
import ProfilePage from '@/pages/profile/ProfilePage';
import Settings from '@/pages/profile/settings/Settings';
import AddVirtualWallet from '@/pages/profile/settings/virtual-address/component/AddVirtualWallet';
import VirtualAddManagement from '@/pages/profile/settings/virtual-address/VirtualAddManagement';
import { Router } from 'framework7/types';
import Recharge from '@/pages/recharge/Recharge';
import NotificationsPage from '@/pages/notifications';
import { NotifDetail } from '@/pages/notifications/components';

const gameRoutes = [
  {
    path: '/games/',
    name: 'Games',
    component: GamesIndexPage,
    routes: [
      {
        path: '/lottery/',
        name: 'Lottery',
        component: Lottery,
      },
      {
        path: '/sports/',
        name: 'Sports',
        component: Sports,
      },
      {
        path: '/video/',
        name: 'Video',
        component: VideoPage,
      },
      {
        path: '/electronic/',
        name: 'Electronic',
        component: Electronic,
      },
      {
        path: '/chess/',
        name: 'Chess',
        component: Chess,
      },
      {
        path: '/fishing/',
        name: 'Fishing',
        component: Fishing,
      },
    ],
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
                component: AdvanceSecVerification,
              },
            ],
          },
        ],
      },
      {
        path: 'fund-management/',
        name: 'Fund Management',
        component: Settings,
      },
    ],
  },
];

export const webRoutes: Router.RouteParameters[] = [
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
      {
        path: '/recharge/',
        name: 'Recharge',
        component: Recharge,
      },
      {
        path: '/notifications/',
        name: 'Notifications',
        component: NotificationsPage,
        routes: [
          {
            path: ':id',
            name: 'NotificationDetail',
            component: NotifDetail,
          },
        ],
      },
      ...profileRoutes,
      ...gameRoutes,
    ],
  },
];
