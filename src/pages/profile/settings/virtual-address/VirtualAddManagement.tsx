import { Block, Tab, Tabs } from 'framework7-react';
import { VirtualWallet, WalletTabs } from './component';
import { ProfileContainer } from '@/pages/profile/component';
import { MobileNavbar } from '@/components';

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
    <ProfileContainer name="virtual address management">
      <MobileNavbar mode="profile" title="Virtual Address Manager" />
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
    </ProfileContainer>
  );
};

export default VirtualAddManagement;
