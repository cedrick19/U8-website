import { Block, Button, Icon } from 'framework7-react';
import { CustomPopUp } from '@/pages/profile/component';
import { f7navigate } from '@/utils/helper';
import { store } from '@/ts/store';
import { walletTexts } from '../utils';

interface WalletPopupProps {
  tabName: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const WalletPopup: React.FC<WalletPopupProps> = ({ tabName, open, setOpen }) => {
  const { dispatch } = store;

  return (
    <CustomPopUp
      title={walletTexts.popup.title}
      open={open}
      clAction={() => setOpen(false)}
      opAction={() => {
        console.log('Add New Wallet Clicked');
        setOpen(false);
      }}
    >
      <Block className="flex flex-col gap-2">
        <div className="items-center">
          <Icon f7="exclamationmark_triangle_fill" icon="text-red-500" size={16} />
          <span className="ml-1 text-sm text-red-600">{walletTexts.popup.walletLimitInfo}</span>
        </div>

        <p className="text-lg font-semibold">{walletTexts.popup.walletCount}</p>

        <Button
          className="text-gradient h-12 border-2 border-secondary font-bold normal-case"
          onClick={() => {
            setOpen(false);
            f7navigate('management-btn', '/profile/settings/account-security/vam/');
            dispatch('setParams', tabName);
          }}
        >
          {walletTexts.popup.managementBtn}
        </Button>

        <Button
          className="h-12 bg-primary-gradient text-center normal-case text-white"
          onClick={() => {
            setOpen(false);
            f7navigate(
              'add-virtual-coin-btn',
              `/profile/settings/account-security/vam/${tabName.toLowerCase()}/`,
            );
            dispatch('setParams', tabName);
          }}
        >
          {walletTexts.popup.addNewWalletBtn}
        </Button>
      </Block>
    </CustomPopUp>
  );
};

export default WalletPopup;
