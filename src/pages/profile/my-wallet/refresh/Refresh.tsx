import { Block, Link, Page } from 'framework7-react';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { RefreshOptions } from '@/pages/profile/my-wallet/refresh/components/utils';
import { MobileNavbar } from '@/components';

const Refresh = () => {
  return (
    <Page name="Refresh">
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <MobileNavbar
        mode="profile"
        title="Refresh"
        navRight={
          <Link
            href="/profile/fund-management/"
            onClick={(e) => {
              (e.currentTarget as HTMLAnchorElement).blur();
            }}
          >
            <span className="text-purple-900">Refill Record</span>
          </Link>
        }
      />
      <Block>
        <SegmentedTabs tabArray={RefreshOptions} />
      </Block>
    </Page>
  );
};

export default Refresh;
