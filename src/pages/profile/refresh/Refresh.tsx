import { Block, Page } from 'framework7-react';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { RefreshOptions } from '@/pages/profile/refresh/components/utils';

const Refresh = () => {
  return (
    <Page name="Refresh" className="relative">
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <ProfileNav
        title="Refresh"
        navRight={<p className="text-base text-purple-800">Refill Record</p>}
      />
      <Block>
        <SegmentedTabs tabArray={RefreshOptions} />
      </Block>
    </Page>
  );
};

export default Refresh;
