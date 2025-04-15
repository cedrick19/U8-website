import { Block, Page } from 'framework7-react';
import { NotifNav } from './components';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { notifComponentArray } from './utils';

const NotificationsPage = () => {
  return (
    <Page name="Notifications">
      <NotifNav title="Notification Center" />
      <Block>
        <SegmentedTabs tabArray={notifComponentArray} />
      </Block>
    </Page>
  );
};

export default NotificationsPage;
