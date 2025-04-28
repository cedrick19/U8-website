import { Block, Card, Icon, Page, Tab, Tabs } from 'framework7-react';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import CustomInput from '@/pages/profile/component/CustomInput';
import WalletTabs from '@/pages/profile/settings/virtual-address/component/WalletTabs';
import { store } from '@/ts/store';
import { currency, formInput, networkTabs } from './utils';

const AddVirtualWallet = () => {
  const param = store.state.walletParams;
  return (
    <Page>
      <ProfileNav title="Add Wallet Address" />
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <Block className="flex gap-1">
        <Icon material="warning" color="red" size={25} />
        <p className="text-red-500">
          Please carefull check the address of the virtual currency, and the wrong accounts funds
          will not be available. Based on the distributed cloud encrypted virtual currency system,
          you can full guarantee your financial security
        </p>
      </Block>
      <Card raised className="space-y-5 bg-white p-5 shadow-md shadow-[#d4caf9]">
        <Block className="w-3/4 space-y-2">
          <p>Currency</p>
          <WalletTabs tabs={currency} className="py-2" params={param} />
        </Block>
        <Block className="space-y-2">
          <p>Network Protocol</p>
          <Tabs className="w-2/3">
            {networkTabs.map(({ id, el }, index) => (
              <Tab key={index} id={id} tabActive={param.toLowerCase() === id}>
                {el}
              </Tab>
            ))}
          </Tabs>
        </Block>
      </Card>
      <form>
        <Card raised className="mb-24 space-y-5 bg-white p-5 shadow-md shadow-[#d4caf9]">
          {formInput.map((data, index) => (
            <CustomInput
              key={index}
              type={index === 2 ? 'password' : 'text'}
              name={data.name}
              label={data.label}
              labelClassName="text-gradient font-bold"
              className="border-2 bg-white shadow-none"
              placeholder={data.placeholder}
              rightDecoration={index === 2 && 'visibility'}
              autoComplete={index === 2 ? `pay)p4ssw0rd` : undefined}
            />
          ))}
        </Card>
      </form>
    </Page>
  );
};

export default AddVirtualWallet;
