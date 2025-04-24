import { Block, Page } from 'framework7-react';
import { NotifNav } from './components';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { SupportComponentArray } from './utils';

const NotificationsPage = () => {
  return (
    <Page name="Notifications">
      <NotifNav title="Notification Center" />
      <Block>
        <SegmentedTabs tabArray={SupportComponentArray} />
      </Block>
    </Page>
  );
};

export default NotificationsPage;
