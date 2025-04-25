import { Page, Block, Icon, Link } from 'framework7-react';
import Layout from '@/layout/layout';
import HomeNavbar from '@/components/MobileNavbar/HomeNavbar';
import activitiesIcon from '@/assets/image/icons/activities.svg';
import ballIcon from '@/assets/image/icons/ball.svg';
import videoIcon from '@/assets/image/icons/video.svg';
import fishIcon from '@/assets/image/icons/fish.svg';
import gameIcon from '@/assets/image/icons/electronic.svg';
import newspaperIcon from '@/assets/image/icons/newspaper.svg';
import { ActivityCard } from './component';

const activities = [
  { id: 1, title: 'All Activities', icon: activitiesIcon },
  { id: 2, title: 'Newcomer Activities', icon: newspaperIcon },
  { id: 3, title: 'Electronic Activities', icon: gameIcon },
  { id: 4, title: 'Fishing Activities', icon: fishIcon },
  { id: 5, title: 'Video Activities', icon: videoIcon },
  { id: 6, title: 'Sports Activities', icon: ballIcon },
];

const ActivityPage = () => {
  return (
    <Page name="activity">
      <HomeNavbar
        navRight={
          <>
            <p className="text-xl font-extrabold">0.00</p>
            <Link
              id="notifications"
              href="/notifications/"
              onClick={() => {
                document.getElementById('notifications')?.blur();
              }}
            >
              <Icon material="notifications" size={35} className="text-gradient" />
            </Link>
          </>
        }
      />
      <Layout>
        <Block className="p-1">
          <div className="grid grid-cols-2 gap-4">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} icon={activity.icon} title={activity.title} />
            ))}
          </div>
        </Block>
      </Layout>
    </Page>
  );
};

export default ActivityPage;
