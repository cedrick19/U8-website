import { Block, Button, Page, Tab, Tabs } from 'framework7-react';
import CoinOn from '@/assets/image/icons/coin-on.svg';
import ProfileNav from '../component/ProfileNav';
import USDT from './component/USDT';
import DAM from './component/DAM';
import { useState } from 'react';
import { cn } from '@/globals/utils';
const VirtualAddManagement = () => {
  const [tabActive, setTabActive] = useState({ usdt: true, dam: false });
  const tabs = [
    {
      label: 'USDT',
      tabActive: tabActive.usdt,
    },
    {
      label: 'DAM',
      tabActive: tabActive.dam,
    },
  ];
  return (
    <Page name="virtual address management">
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <ProfileNav title="Virtual Address Manager" />
      <Block className="flex h-12 gap-5">
        {tabs.map(({ label, tabActive }, index) => (
          <Button
            key={index}
            className={cn(
              'w-full rounded-2xl',
              tabActive === true ? 'bg-primary-gradient' : 'border-2 border-primary',
            )}
            tabLink={`#${label.toLowerCase()}`}
            large
            onClick={() =>
              setTabActive(
                label === 'USDT' ? { usdt: true, dam: false } : { usdt: false, dam: true },
              )
            }
          >
            <div className="flex items-center gap-[2px]">
              <img
                src={CoinOn}
                className={cn('h-6 w-6', !tabActive ? 'rounded-full bg-primary-gradient' : '')}
              />
              <p className={tabActive ? 'text-white' : 'text-gradient'}>{label}</p>
            </div>
          </Button>
        ))}
      </Block>
      <Tabs className="">
        <Tab id="usdt" tabActive>
          <USDT />
        </Tab>
        <Tab id="dam">
          <DAM />
        </Tab>
      </Tabs>
    </Page>
  );
};

export default VirtualAddManagement;
