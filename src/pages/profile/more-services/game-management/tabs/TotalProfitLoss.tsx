import { Block, Button, CardContent } from 'framework7-react';
import { useState } from 'react';
import { DropBottom } from '@/pages/profile/component';
import CustomPopUp from '@/pages/profile/component/CustomPopUp';

const dateSelection = [
  {
    labelKey: 'tplDate',
    popUpId: 'tplDatePopup',
    options: ['Today', 'Yesterday', 'This Month', 'Last Month'],
  },
];

export const TotalProfitLoss = () => {
  const [dateOption, setDateOption] = useState<Record<string, string>>({
    tplDate: 'Today',
  });

  const [open, setOpen] = useState<boolean>(false);
  return (
    <Block strong className="flex flex-col items-start gap-6 rounded-3xl bg-white py-5">
      <DropBottom
        popUpConfig={dateSelection}
        activeOption={dateOption}
        setActiveOption={setDateOption}
      />
      <CardContent className="w-full items-center gap-2 rounded-2xl bg-primary-gradient p-4 text-center">
        <div className="flex flex-row items-center justify-center">
          <p className="text-white">Total profit and loss</p>
          <Button
            className="text-white"
            iconF7="question_circle_fill"
            iconSize={20}
            onClick={() => setOpen(true)}
          />
        </div>
        <p className="text-3xl font-extrabold text-white">0</p>
      </CardContent>

      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-row justify-between">
          <p className="text-gradient">Game win or lose</p>
          <p className="font-bold">0</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-gradient">Water return amount</p>
          <p className="font-bold">2</p>
        </div>
      </div>

      <CustomPopUp
        title="Total Profit and Loss"
        className="bg-white"
        open={open}
        clAction={() => setOpen(false)}
      >
        <p>
          Total profit and loss = game win-win + win-win adjustment + water return amount + water
          return adjustment + account adjustment + other income and expenditure items
        </p>
        <Button
          className="h-10 rounded-xl bg-primary-gradient normal-case text-white"
          onClick={() => setOpen(false)}
        >
          Understood
        </Button>
      </CustomPopUp>
    </Block>
  );
};
