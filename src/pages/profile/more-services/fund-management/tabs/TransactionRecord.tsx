import { useState } from 'react';
import { TransactionPopup } from './utils';
import { DropBottom } from '@/pages/profile/component';
import NoData from '@/assets/image/profile/more-services/fund_management_no_data.png';

export const TransactionRecord = () => {
  const [activeOption, setActiveOption] = useState<Record<string, string>>({
    transactionOption: 'Recharge',
    paymentOption: 'All',
    timeOption: 'Today',
  });

  return (
    <>
      <DropBottom
        popUpConfig={TransactionPopup}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      <img src={NoData} className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2" />
    </>
  );
};
