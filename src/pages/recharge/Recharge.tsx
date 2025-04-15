import HomeNavbar from '@/components/MobileNavbar/HomeNavbar';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { Block, Page } from 'framework7-react';
import { RechargeOptions } from './components/utils';

const Recharge = () => {
  return (
    <Page name="Recharge">
      <HomeNavbar />
      <Block>
        <SegmentedTabs tabArray={RechargeOptions} />
      </Block>
    </Page>
  );
};

export default Recharge;
