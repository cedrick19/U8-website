import { WalletPage } from './WalletPage';
import { HuangWangPage } from './HuangwangPage';

export const RefreshOptions = [
  {
    tabName: 'HuangWang',
    tabLink: 'huangwang',
    component: <HuangWangPage />,
  },
  {
    tabName: 'USDT',
    tabLink: 'usdt',
    component: <WalletPage />,
  },
  {
    tabName: 'DAI',
    tabLink: 'dai',
    component: <WalletPage />,
  },
];

export const infoItems = [
  { label: 'Wallet Balance', value: '0.00' },
  { label: 'Handling Fee', value: '0.00' },
  { label: 'Expected', value: '0.00' },
  { label: 'Frozen Amount', value: '0.00' },
];

export const balanceSummary = [
  { label: 'Wallet Balance', value: '0.00' },
  { label: 'Handling Fee', value: '0.00' },
  { label: 'Expected', value: '0.00' },
  { label: 'Frozen Amount', value: '0.00' },
];
