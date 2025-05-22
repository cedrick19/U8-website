import { useState } from 'react';
import VirtualCurrency from './WalletPageComponents/VirtualCurrency';
import CashWithdrawal from './WalletPageComponents/WalletWithdrawal';
import WalletPopup from './WalletPageComponents/WalletPopup';

export const WalletPage: React.FC<{ tabName: string }> = ({ tabName }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <VirtualCurrency onAddClick={() => setPopupOpen(true)} />
      <CashWithdrawal tabName={tabName} />
      <WalletPopup tabName={tabName} open={popupOpen} setOpen={setPopupOpen} />
    </>
  );
};

export default WalletPage;
