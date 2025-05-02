import { Block, Page } from 'framework7-react';
import { SegmentButtons, SegmentedTabs } from '@/components/SegmentedTabs';
import { FundingDetails, TransactionRecord } from './tabs';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import { store } from '@/ts/store';

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
  const { state } = store;
  return (
    <Page name="Fund Management">
      <ProfileNav title="Fund Management" />
      <Block>
        <SegmentedTabs tabArray={FundManageArray} defaultActiveTabIndex={state.fundActiveState} />
      </Block>
    </Page>
  );
};

export default FundManagement;
