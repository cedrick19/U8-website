import { useState } from 'react';
import { FundingPopUp } from './utils';
import { DropBottom } from './DropBottom';

export const FundingDetails = () => {
  const [activeOption, setActiveOption] = useState<Record<string, string>>({
    gameOption: 'All',
    timeOption: 'Today',
  });

  return (
    <DropBottom
      popUpConfig={FundingPopUp}
      activeOption={activeOption}
      setActiveOption={setActiveOption}
      spanTwo={['The game is successfully divided', 'Exceeding the maximum deduction.']}
    />
  );
};
