import { Block, Page } from 'framework7-react';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { FundingDetails, TransactionRecord } from './tabs';
import { store } from '@/ts/store';
import { MobileNavbar } from '@/components';
import { SegmentButtons } from '@/components/SegmentedTabs/type';

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
      <MobileNavbar mode="profile" title="Fund Management" />
      <Block>
        <SegmentedTabs tabArray={FundManageArray} defaultActiveTabIndex={state.fundActiveState} />
      </Block>
    </Page>
  );
};

export default FundManagement;
