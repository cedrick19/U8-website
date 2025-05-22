import { Block, Link, Page } from 'framework7-react';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { RefreshOptions } from '@/pages/profile/my-wallet/refresh/utils';
import { MobileNavbar } from '@/components';
import { f7navigate } from '@/utils/helper';

const Refresh = () => {
  return (
    <Page name="Refresh">
      <MobileNavbar
        mode="profile"
        title="Refresh"
        navRight={
          <Link
            id="fund-management-button"
            onClick={() => f7navigate('fund-management-button', '/profile/fund-management/')}
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
