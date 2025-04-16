import { USDTPage } from './USDTPage';
import { FDRPage } from './FDRPage';
import { HuiwangPage } from './HuiwangPage';
import U8Trc from '@/assets/image/qr/u8-tr.png';
import U8Erc from '@/assets/image/qr/u8-er.png';
import CcTrc from '@/assets/image/qr/cc-tr.png';
import CcErc from '@/assets/image/qr/cc-er.png';
import WeChat from '@/assets/image/icons/WeChat.svg';
import AliPay from '@/assets/image/icons/AliPay.svg';
import { SegmentButtons } from '@/components/SegmentedTabs';

export const RechargeOptions: SegmentButtons[] = [
  {
    tabName: 'USDT Deposit',
    tabLink: 'usdt',
    component: <USDTPage />,
  },
  {
    tabName: 'Financial Direct Recharge',
    tabLink: 'fda',
    component: <FDRPage />,
  },
  {
    tabName: 'Huiwang Payment',
    tabLink: 'huiwang',
    component: <HuiwangPage />,
  },
];

export const paymentDetails: Record<string, { image: string; address: string }> = {
  'U8 Payment-TRC20': {
    image: U8Trc,
    address: 'TAmNkQ8cRa36PcXxBW5qJPDtozybFkZbW3',
  },
  'U8 Payment-ERC20': {
    image: U8Erc,
    address: '0xd91460b2235a611f3c6c5ce75d3e76e92e1b0fb8',
  },
  'CC Payment-TRC20': {
    image: CcTrc,
    address: 'TVeAkLXfA4P88AcRkRHj61dMK3DTMrPbLb',
  },
  'CC Payment-ERC20': {
    image: CcErc,
    address: '0xD7C8BB235F1373e845B6Fd9c83E28582b8E5BE89',
  },
};

export const usdtWarmTips = [
  'The payment address should be changed regularly. Please do not save it for long-term use. Please confirm whether it is consistent with the system display before payment.',
  'Please do not deposit any network protocols and currencies other than those provided in the options to the above address, otherwise the assets will be irrecoverable;',
  'After you recharge to the above address, it needs confirmation from the entire network node and will be credited after 2 network confirmations;',
  'Please make sure your computer and browser are secure to prevent information from being tampered with or leaked.',
];

export const fdrRechargeOptions = [
  {
    fdrImage: WeChat,
    fdrText: 'WeChat',
  },
  {
    fdrImage: AliPay,
    fdrText: 'AliPay',
  },
];

export const fdrWarmTips = [
  'Before changing the financial Telegram account, we will announce it in advance through the bullet window announcement \nthree days\n, Please pay attention to the announcement and recognize the official only financial account, beware of being deceived!',
  'Please recognize the official only financial account on this page, carefully identify the fake robot account, and beware of being deceived!',
  'The substitute value of the baht is based on the real-time exchange rate of the currency exchange',
];
