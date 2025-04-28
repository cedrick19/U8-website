import { Link } from 'framework7-react';
import WalletTabs from '@/pages/profile/settings/virtual-address/component/WalletTabs';

export const currency = [
  {
    type: 'USDT',
  },
  {
    type: 'DAM',
  },
];
export const network = [
  {
    type: 'TRC20',
  },
  {
    type: 'ERC20',
  },
];
export const networkTabs = [
  {
    id: 'usdt',
    el: <WalletTabs tabs={network} className="py-3" />,
  },
  {
    id: 'dam',
    el: (
      <Link className="w-fit gap-1 rounded-full bg-primary-gradient px-5">
        <span className="py-[13.6px] text-lg font-bold text-white">ERC20</span>
      </Link>
    ),
  },
];

export const formInput = [
  {
    name: 'walletAddrAbbr',
    label: 'Wallet Address Abbreviation',
    placeholder: 'Name',
  },
  {
    name: 'virtualCurrAddr',
    label: 'Virtual Currency Address',
    placeholder: 'Enter your virtual currency address',
  },
  {
    name: 'payPassword',
    label: 'Pay Password',
    placeholder: 'Enter your payment password',
  },
];
