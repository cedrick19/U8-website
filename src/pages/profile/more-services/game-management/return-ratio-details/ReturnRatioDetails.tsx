import { useState } from 'react';
import { Card, Page } from 'framework7-react';

import { DropBottom } from '@/pages/profile/component';

import { MobileNavbar } from '@/components';

import {
  gridHeader,
  lotteryContent,
  lotteryHeader,
  lotteryTicketCategory,
  returnRatioCategory,
  returnRatioContent,
} from './utils';
import RatioTable from './component/RatioTable';
import { GridBody } from './type';

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
      <MobileNavbar mode="profile" title="Return Ratio Details" />
      <Card className="mb-24 flex-col space-y-5 bg-white p-4 shadow-md">
        <DropBottom
          popUpConfig={returnRatioCategory}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
          className="p-0"
        />
        {activeOption.ratioOption === 'Lottery ticket' && (
          <DropBottom
            popUpConfig={lotteryTicketCategory}
            activeOption={activeLotteryOption}
            setActiveOption={setActiveLotteryOption}
            className="p-0"
          />
        )}
        {activeOption.ratioOption === 'Lottery ticket' &&
          lotteryContent.map(({ category, content }, index) => {
            return (
              activeLotteryOption.lotteryOption === category && (
                <RatioTable
                  key={index}
                  gridBody={content as GridBody[]}
                  gridHeader={lotteryHeader}
                />
              )
            );
          })}
        {returnRatioContent.map(({ category, content }, index) => {
          return (
            activeOption.ratioOption === category &&
            content && <RatioTable key={index} gridBody={content} gridHeader={gridHeader} />
          );
        })}
      </Card>
    </Page>
  );
};

export default ReturnRatioDetails;
