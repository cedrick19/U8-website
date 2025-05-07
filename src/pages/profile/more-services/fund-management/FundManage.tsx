import { Block } from 'framework7-react';

import { ProfileContainer } from '@/pages/profile/component';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { SegmentButtons } from '@/components/SegmentedTabs/type';

import { MobileNavbar } from '@/components';
import { store } from '@/ts/store';

import { FundingDetails, TransactionRecord } from './tabs';

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
    <ProfileContainer name="Fund Management">
      <MobileNavbar mode="profile" title="Fund Management" />
      <Block>
        <SegmentedTabs tabArray={FundManageArray} defaultActiveTabIndex={state.fundActiveState} />
      </Block>
    </ProfileContainer>
  );
};

export default FundManagement;
