import { Block, Button, Card, f7, Icon, Page } from 'framework7-react';
import CoinOn from '@/assets/image/icons/coin-on.svg';
import { cn } from '@/globals/utils';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import CustomInput from '@/pages/profile/component/CustomInput';
import { useEffect, useState } from 'react';

const AddVirtualWallet = () => {
  const wallets = f7.view.main.router.currentRoute.params?.wallet;
  const [active, setActive] = useState('');
  useEffect(() => {
    setActive(wallets ?? 'usdt');
  }, [wallets]);
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
        <Block className="space-y-1">
          <p>Currency</p>
          <Block className="flex gap-3 p-0">
            <Button
              className={cn(
                'gap-1 rounded-3xl px-5',
                active !== 'usdt' ? 'border-2 border-primary' : 'bg-primary-gradient text-white',
              )}
              onClick={() => {
                setActive('usdt');
              }}
              large
            >
              <img
                src={CoinOn}
                className={cn(active !== 'usdt' ? 'rounded-full bg-primary-gradient' : '')}
              />
              USDT
            </Button>

            <Button
              className={cn(
                'text-gradient gap-1 rounded-3xl px-5',
                active !== 'dam' ? 'border-2 border-primary' : 'bg-primary-gradient text-white',
              )}
              onClick={() => {
                setActive('dam');
              }}
              large
            >
              <img
                src={CoinOn}
                className={cn(active !== 'dam' ? 'rounded-full bg-primary-gradient' : '')}
              />
              DAM
            </Button>
          </Block>
        </Block>
        <Block className="space-y-1">
          <p>Network Protocol</p>
          <Block className="flex gap-3 p-0">
            {active === 'usdt' ? (
              <Button
                className="text-gradient gap-1 rounded-3xl border-2 border-primary px-5"
                large
              >
                TRC20
              </Button>
            ) : undefined}

            <Button className="gap-1 rounded-3xl bg-primary-gradient px-5 text-white" large>
              <img src={CoinOn} className={cn('h-6 w-6 rounded-full')} />
              ERC20
            </Button>
          </Block>
        </Block>
      </Card>
      <Card raised className="mb-24 space-y-5 bg-white p-5 shadow-md shadow-[#d4caf9]">
        <form>
          <CustomInput
            name="walletAddrAbbr"
            label="Wallet Address Abbreviation"
            labelClassName="text-gradient font-bold"
            rightDecoration={undefined}
            className="border-2"
            placeholder="Name"
          />
          <CustomInput
            name="virtualCurrAddr"
            label="Virtual Currency Address"
            labelClassName="text-gradient font-bold"
            className="border-2"
            placeholder="Enter your virtual currency address"
          />
          <CustomInput
            type="password"
            name="payPassword"
            label="Pay Password"
            labelClassName="text-gradient font-bold"
            className="border-2"
            placeholder="Enter your payment password"
            rightDecoration="visibility"
            autoComplete="acbc123<>?"
          />
        </form>
      </Card>
    </Page>
  );
};

export default AddVirtualWallet;
