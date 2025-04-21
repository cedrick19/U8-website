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
