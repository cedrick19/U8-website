import { WalletPage } from './WalletPage';
import { HuangWangPage } from './HuangwangPage';
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
  { label: 'Wallet Balance', value: '11.00' },
  { label: 'Handling Fee', value: '0.00' },
  { label: 'Expected', value: '0.00' },
  { label: 'Frozen Amount', value: '0.00' },
];

export const walletTexts = {
  noWalletAddressTitle: 'No virtual currency address',
  noWalletAddressSub: 'Please add a virtual currency address.',
  hiddenWalletAddress: '•••• •••• •••• ••••',

  cashWithdrawalTitle: 'Cash withdrawal',
  inputPlaceholder: 'Enter Amount',
  maxButtonLabel: 'MAX',

  frozenAmountInfo: {
    label: 'Frozen Amount',
    tooltip: 'Only 5 virtual coin wallets can be added',
  },

  contactInfo: {
    message: 'Contact for first presentation',
    handle: '@U8hdkefu8',
    details:
      'Official grid customer service and let the customer service retain your aircraft number. The customer service will be checked twice to ensure the safety of fund.',
  },

  submitButton: 'Immediately',

  popup: {
    title: 'Switch Collection Address',
    walletLimitInfo: 'Only 5 virtual coin wallets can be added',
    walletCount: '0/5',
    managementBtn: 'Management',
    addNewWalletBtn: 'Add New Virtual Coin Wallet Address',
  },
};
