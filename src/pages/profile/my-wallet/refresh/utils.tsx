import { WalletPage } from './WalletPage';
import { HuangWangPage } from './HuangwangPage';
import { SegmentButtons } from '@/components/SegmentedTabs/type';
import { Icon } from 'framework7-react';

export const RefreshOptions: SegmentButtons[] = [
  {
    tabName: 'HuangWang',
    component: <HuangWangPage />,
  },
  {
    tabName: 'USDT',
    component: <WalletPage tabName="USDT" />,
  },
  {
    tabName: 'DAM',
    component: <WalletPage tabName="DAM" />,
  },
];

export const countryCodes = [
  { id: 1, code: '+1', country: 'USA' },
  { id: 2, code: '+86', country: 'CHN' },
  { id: 3, code: '+61', country: 'AUS' },
  { id: 4, code: '+63', country: 'PH' },
];

export const balanceSummary = [
  { label: 'Wallet Balance', value: '99.99' },
  { label: 'Handling Fee', value: '0.00' },
  { label: 'Expected', value: '0.00' },
  {
    label: 'Frozen Amount',
    value: '0.00',
    icon: <Icon f7="question_circle_fill" size={16} className="ml-1 text-[16px] text-gray-500" />,
  },
];
