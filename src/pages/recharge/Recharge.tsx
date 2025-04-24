import { SegmentedTabs } from '@/components/SegmentedTabs';
import { Block, Page } from 'framework7-react';
import { RechargeOptions } from './components/utils';
import { RechargeNavbar } from './components';

const Recharge = () => {
  return (
    <Page name="Recharge">
      <RechargeNavbar />
      <Block>
        <SegmentedTabs tabArray={RechargeOptions} />
      </Block>
    </Page>
  );
};

export default Recharge;
