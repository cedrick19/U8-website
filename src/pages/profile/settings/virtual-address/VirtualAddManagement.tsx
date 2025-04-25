import { Block, Page, Tab, Tabs } from 'framework7-react';

import ProfileNav from '@/pages/profile/component/ProfileNav';
import VirtualWallet from './component/VirtualWallet';
import WalletTabs from './component/WalletTabs';
const VirtualAddManagement = () => {
  const virtualWallet = [
    {
      type: 'USDT',
      url: 'usdt/',
    },
    {
      type: 'DAM',
      url: 'dam/',
    },
  ];
  return (
    <Page name="virtual address management">
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <ProfileNav title="Virtual Address Manager" />
      <Block className="h-12 w-full gap-5">
        <WalletTabs tabs={virtualWallet} coins />
      </Block>
      <Tabs>
        {virtualWallet.map((wallet, index) => (
          <Tab tabActive={index === 0} id={wallet.type.toLowerCase()} key={index}>
            <VirtualWallet wallet={wallet} />
          </Tab>
        ))}
      </Tabs>
    </Page>
  );
};

export default VirtualAddManagement;
