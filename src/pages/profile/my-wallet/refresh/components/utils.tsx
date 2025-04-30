import { WalletPage } from './WalletPage';
import { HuangWangPage } from './HuangwangPage';
import { SegmentButtons } from '@/components/SegmentedTabs';

export const RefreshOptions: SegmentButtons[] = [
  {
    tabName: 'HuangWang',
    component: <HuangWangPage />,
  },
  {
    tabName: 'USDT',
    component: <WalletPage />,
  },
  {
    tabName: 'DAI',
    component: <WalletPage />,
  },
];

export const countryCodes = [
  { id: 1, code: '+1', country: 'USA' },
  { id: 2, code: '+86', country: 'China' },
  { id: 3, code: '+61', country: 'Australia' },
  { id: 4, code: '+63', country: 'Philippines' },
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
