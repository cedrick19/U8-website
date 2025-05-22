import { useState } from 'react';
import { Block, Button, Icon } from 'framework7-react';
import { CustomPopUp } from '@/pages/profile/component';

import { store } from '@/ts/store';
import { f7navigate } from '@/utils/helper';
import CashWithdrawal from './components/CashWithdrawal';

export const WalletPage: React.FC<{ tabName: string }> = ({ tabName }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const { dispatch } = store;

  return (
    <>
      <Block className="flex flex-row items-center gap-6 rounded-3xl bg-white py-5">
        <Button
          className="h-12 w-12 items-center justify-center rounded-2xl bg-primary-gradient"
          onClick={() => {
            setPopupOpen(true);
            console.log(tabName);
          }}
        >
          <Icon f7="plus" icon="text-white" size={20} />
        </Button>

        <div>
          <p className="text-lg font-bold text-black">No virtual currency address</p>
          <p className="text-xs text-gray-600">Please add a virtual currency address.</p>
          <p className="text-sm text-gray-600">•••• •••• •••• ••••</p>
        </div>
      </Block>

      <CashWithdrawal tabName={tabName} />

      <CustomPopUp
        title="Switch Collection Address"
        open={popupOpen}
        clAction={() => setPopupOpen(false)}
        opAction={() => {
          console.log('Add New Wallet Clicked');
          setPopupOpen(false);
        }}
      >
        <Block className="flex flex-col gap-2">
          <div className="items-center">
            <Icon f7="exclamationmark_triangle_fill" icon="text-red-500" size={16} />
            <span className="ml-1 text-sm text-red-600">
              Only 5 virtual coin wallets can be added
            </span>
          </div>

          <p className="text-lg font-semibold">0/5</p>

          <Button
            className="text-gradient h-12 border-2 border-secondary font-bold normal-case"
            onClick={() => {
              setPopupOpen(false);
              f7navigate('management-btn', '/profile/settings/account-security/vam/');
              dispatch('setParams', tabName);
            }}
          >
            Management
          </Button>

          <Button
            className="h-12 bg-primary-gradient text-center normal-case text-white"
            onClick={() => {
              setPopupOpen(false);
              f7navigate(
                'add-virtual-coin-btn',
                `/profile/settings/account-security/vam/${tabName.toLowerCase()}/`,
              );
              dispatch('setParams', tabName);
            }}
          >
            Add New Virtual Coin Wallet Address
          </Button>
        </Block>
      </CustomPopUp>
    </>
  );
};

export default WalletPage;
