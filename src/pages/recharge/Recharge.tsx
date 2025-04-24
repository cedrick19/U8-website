import { SegmentedTabs } from '@/components/SegmentedTabs';
import { Block, Page } from 'framework7-react';
import { RechargeOptions } from './components/utils';
import ProfileNav from '../profile/component/ProfileNav';
import Logo from '@/assets/image/logo.png';

const Recharge = () => {
  return (
    <Page name="Recharge">
      <ProfileNav image={Logo} imageClassName="w-24 h-24 object-contain" />
      <Block>
        <SegmentedTabs tabArray={RechargeOptions} />
      </Block>
    </Page>
  );
};

export default Recharge;
