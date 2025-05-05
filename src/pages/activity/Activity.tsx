import { Page, Block, Icon, Link } from 'framework7-react';

import Layout from '@/layout/layout';

import { f7navigate } from '@/utils/helper';
import { MobileNavbar } from '@/components';

import { activities } from './utils';
import { ActivityCard } from './component';

const ActivityPage = () => {
  const handleNavigate = (key: string, path: string): void => {
    const uniqueKey = key.split(' ').join('-').toLowerCase();

    f7navigate(uniqueKey, `/activity${path}`);
  };

  return (
    <Page name="activity">
      <MobileNavbar
        mode="home"
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
              <ActivityCard
                key={activity.id}
                icon={activity.icon}
                title={activity.title}
                navigate={() => handleNavigate(activity.title, activity.path)}
              />
            ))}
          </div>
        </Block>
      </Layout>
    </Page>
  );
};

export default ActivityPage;
