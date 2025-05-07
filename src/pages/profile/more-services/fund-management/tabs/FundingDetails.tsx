import { useState } from 'react';
import { FundingPopUp } from './utils';
import { DropBottom } from '@/pages/profile/component';
import NoData from '@/assets/image/profile/more-services/fund_management_no_data.png';

export const FundingDetails = () => {
  const [activeOption, setActiveOption] = useState<Record<string, string>>({
    gameOption: 'All',
    timeOption: 'Today',
  });

  return (
    <>
      <DropBottom
        popUpConfig={FundingPopUp}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        spanTwo={['The game is successfully divided', 'Exceeding the maximum deduction.']}
      />
      <img src={NoData} className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2" />
    </>
  );
};
