import { Block, Page } from 'framework7-react';
import { SegmentButtons, SegmentedTabs } from '@/components/SegmentedTabs';
import { FundingDetails, TransactionRecord } from './tabs';
import ProfileNav from '@/pages/profile/component/ProfileNav';

const FundManageArray: SegmentButtons[] = [
  {
    tabName: 'Funding Details',
    component: <FundingDetails />,
  },
  {
    tabName: 'Transaction Record',
    component: <TransactionRecord />,
  },
];

const FundManagement = () => {
  return (
    <Page name="Fund Management">
      <ProfileNav title="Fund Management" />
      <Block>
        <SegmentedTabs tabArray={FundManageArray} />
      </Block>
    </Page>
  );
};

export default FundManagement;
