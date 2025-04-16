import { USDTPage } from './USDTPage';
import { DAIPage } from './DAIPage';

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
    component: <USDTPage />,
  },
  {
    tabName: 'DAI',
    tabLink: 'dai',
    component: <DAIPage />,
  },
];
