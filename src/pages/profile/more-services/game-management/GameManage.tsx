import { Block, Page } from 'framework7-react';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import { SegmentButtons, SegmentedTabs } from '@/components/SegmentedTabs';
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
  return (
    <Page name="Game Management">
      <ProfileNav title="Game Management" />
      <Block>
        <SegmentedTabs tabArray={GameManageArray} />
      </Block>
    </Page>
  );
};

export default GameManage;
