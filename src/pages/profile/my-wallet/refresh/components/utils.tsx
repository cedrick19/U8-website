import { Icon } from 'framework7-react';
import { HuangWangPage } from './HuangWangPage';
import { WalletPage } from './WalletPage';

import { SegmentButtons } from '@/components/SegmentedTabs/type';

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
  { label: 'Wallet Balance', value: '0.00' },
  { label: 'Handling Fee', value: '0.00' },
  { label: 'Expected', value: '0.00' },
  {
    label: 'Frozen Amount',
    value: '0.00',
    icon: <Icon f7="question_circle_fill" size={16} className="ml-1 text-[16px] text-gray-500" />,
  },
];

export const VirtualCurrencyText = [
  { text: 'No virtual currency address', className: 'text-lg font-bold' },
  { text: 'Please add a virtual currency address.', className: 'text-xs text-gray-600' },
  { text: '•••• •••• •••• ••', className: 'text-sm text-gray-600' },
];
