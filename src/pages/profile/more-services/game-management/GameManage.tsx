import { Block } from 'framework7-react';

import { ProfileContainer } from '@/pages/profile/component/';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { SegmentButtons } from '@/components/SegmentedTabs/type';

import { MobileNavbar } from '@/components';
import { store } from '@/ts/store';

import { GameNote, RealTimeWater, TotalProfitLoss } from './tabs';

const GameManageArray: SegmentButtons[] = [
  {
    tabName: 'Game Note',
    component: <GameNote />,
  },
  {
    tabName: 'Total Profit and Loss',
    component: <TotalProfitLoss />,
  },
  {
    tabName: 'Real-time Water Return',
    component: <RealTimeWater />,
  },
];

const GameManage = () => {
  const { state } = store;
  return (
    <ProfileContainer name="Game Management">
      <MobileNavbar mode="profile" title="Game Management" />
      <Block>
        <SegmentedTabs tabArray={GameManageArray} defaultActiveTabIndex={state.gameActiveState} />
      </Block>
    </ProfileContainer>
  );
};

export default GameManage;
