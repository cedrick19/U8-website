import { Block, Page } from 'framework7-react';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import { SegmentButtons, SegmentedTabs } from '@/components/SegmentedTabs';
import { GameNote, RealTimeWater, TotalProfitLoss } from './tabs';
import { store } from '@/ts/store';

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
    <Page name="Game Management">
      <ProfileNav title="Game Management" />
      <Block>
        <SegmentedTabs tabArray={GameManageArray} defaultActiveTabIndex={state.gameActiveState} />
      </Block>
    </Page>
  );
};

export default GameManage;
