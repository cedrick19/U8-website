import { Block, Page } from 'framework7-react';
import { SegmentButtons, SegmentedTabs } from '@/components/SegmentedTabs';
import { FundingDetails, TransactionRecord } from './tabs';
import ProfileNav from '@/pages/profile/component/ProfileNav';

const sampleArray: SegmentButtons[] = [
  {
    tabName: 'Funding Details',
    tabLink: 'funding-details',
    component: <FundingDetails />,
  },
  {
    tabName: 'Transaction Record',
    tabLink: 'transaction-record',
    component: <TransactionRecord />,
  },
];

const FundManagement = () => {
  return (
    <Page name="Fund Management">
      <ProfileNav title="Fund Management" />
      <Block>
        <SegmentedTabs tabArray={sampleArray} />
      </Block>
    </Page>
  );
};

export default FundManagement;
