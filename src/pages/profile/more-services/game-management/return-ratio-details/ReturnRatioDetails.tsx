import { DropBottom } from '@/pages/profile/component';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import { Card, Page } from 'framework7-react';
import {
  lotteryContent,
  lotteryTicketCategory,
  returnRatioCategory,
  returnRatioContent,
} from './utils';
import { useState } from 'react';
import RatioTable from './component/RatioTable';

const ReturnRatioDetails = () => {
  const [activeOption, setActiveOption] = useState<Record<string, string>>({
    ratioOption: 'Video',
  });
  const [activeLotteryOption, setActiveLotteryOption] = useState<Record<string, string>>({
    lotteryOption: 'Canada 5.0',
  });
  return (
    <Page name="Return Ratio Details">
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <ProfileNav title="Return Ratio Details" />
      <Card className="flex-col space-y-5 bg-white p-4 shadow-md">
        <DropBottom
          popUpConfig={returnRatioCategory}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
        {activeOption.ratioOption === 'Lottery ticket' && (
          <DropBottom
            popUpConfig={lotteryTicketCategory}
            activeOption={activeLotteryOption}
            setActiveOption={setActiveLotteryOption}
          />
        )}
        {activeOption.ratioOption === 'Lottery ticket' &&
          lotteryContent.map(({ category, content: { gridBody, gridHeader } }, index) => {
            return (
              activeLotteryOption.lotteryOption === category && (
                <RatioTable key={index} gridBody={gridBody} gridHeader={gridHeader} />
              )
            );
          })}
        {returnRatioContent.map(({ category, content: { gridBody, gridHeader } }, index) => {
          const newCat = category != 'Lottery ticket' ? category : '';
          return (
            activeOption.ratioOption === newCat && (
              <RatioTable key={index} gridBody={gridBody} gridHeader={gridHeader} />
            )
          );
        })}
      </Card>
    </Page>
  );
};

export default ReturnRatioDetails;
