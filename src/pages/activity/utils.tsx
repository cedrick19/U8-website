import activitiesIcon from '@/assets/image/activities/activities.svg';
import ballIcon from '@/assets/image/activities/ball.svg';
import videoIcon from '@/assets/image/activities/video.svg';
import fishIcon from '@/assets/image/activities/fish.svg';
import gameIcon from '@/assets/image/activities/electronic.svg';
import newspaperIcon from '@/assets/image/activities/newspaper.svg';

export const activities = [
  { id: 1, title: 'All Activities', icon: activitiesIcon, path: '/all-activity/' },
  { id: 2, title: 'Newcomer Activities', icon: newspaperIcon, path: '/newcomer/' },
  { id: 3, title: 'Electronic Activities', icon: gameIcon, path: '/electronic/' },
  { id: 4, title: 'Fishing Activities', icon: fishIcon, path: '/fishing/' },
  { id: 5, title: 'Video Activities', icon: videoIcon, path: '/video/' },
  { id: 6, title: 'Sports Activities', icon: ballIcon, path: '/sports/' },
];
