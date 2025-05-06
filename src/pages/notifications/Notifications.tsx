import { Block, Page } from 'framework7-react';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { notifComponentArray } from './utils';
import { MobileNavbar } from '@/components';

const NotificationsPage = () => {
  return (
    <Page name="Notifications">
      <MobileNavbar mode="profile" title="Notification Center" />
      <Block>
        <SegmentedTabs tabArray={notifComponentArray} />
      </Block>
    </Page>
  );
};

export default NotificationsPage;
