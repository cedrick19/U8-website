import { Page, Block, Icon, Link, CardContent } from 'framework7-react';
import Layout from '@/layout/layout';
import HomeNavbar from '@/components/MobileNavbar/HomeNavbar';
import ActivityBg from '@/assets/image/svg/activity_card.svg';
import { activities } from './utils';

const ActivityCard = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <>
      <div className="relative flex h-40 w-full overflow-hidden rounded-2xl shadow-sm">
        <img src={ActivityBg} alt="activity" className="absolute h-full w-full object-cover" />
        <CardContent className="flex flex-col items-center justify-center gap-2">
          <img src={icon} alt={title} className="h-10 w-10 object-contain" />
          <p className="text-gradient text-center text-2xl font-extrabold">{title}</p>
        </CardContent>
      </div>
    </>
  );
};

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
