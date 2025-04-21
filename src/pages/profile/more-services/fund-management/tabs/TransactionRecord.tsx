import { useState } from 'react';
import { TransactionPopup } from './utils';
import { DropBottom } from '@/pages/profile/more-services/component/DropBottom';

export const TransactionRecord = () => {
  const [activeOption, setActiveOption] = useState<Record<string, string>>({
    transactionOption: 'Recharge',
    paymentOption: 'All',
    timeOption: 'Today',
  });

  return (
    <DropBottom
      popUpConfig={TransactionPopup}
      activeOption={activeOption}
      setActiveOption={setActiveOption}
    />
  );
};
