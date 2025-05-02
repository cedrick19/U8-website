import { Block, Button, CardContent, Icon } from 'framework7-react';
import { useState } from 'react';
import { DropBottom } from '@/pages/profile/more-services/component';
import CustomPopUp from '@/pages/profile/component/CustomPopUp';
import { clickNavigate } from '@/utils/helper';

const dateSelection = [
  {
    labelKey: 'waterDate',
    popUpId: 'waterDatePopup',
    options: ['Today', 'Yesterday', 'This Month', 'Last Month'],
  },
];

export const RealTimeWater = () => {
  const [activeOption, setActiveOption] = useState<Record<string, string>>({
    waterDate: 'Today',
  });
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Block strong className="flex flex-col items-start gap-6 rounded-3xl bg-white py-5">
      <DropBottom
        popUpConfig={dateSelection}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />

      <CardContent className="w-full items-center gap-2 rounded-2xl bg-primary-gradient p-4 text-center">
        <div className="flex flex-row items-center justify-center">
          <p className="text-white">Total water rebound</p>
          <Button
            className="text-white"
            iconF7="question_circle_fill"
            iconSize={20}
            onClick={() => setOpen(true)}
          />
        </div>
        <p className="text-3xl font-extrabold text-white">0</p>
      </CardContent>

      <Button
        className="flex h-10 w-full flex-row items-center rounded-lg border-2 border-secondary bg-white normal-case"
        {...clickNavigate('return-ratio-details', 'return-ratio-details/')}
      >
        <span className="text-secondary">Return Ratio Details</span>
        <Icon f7="chevron_right" icon="text-secondary" size={16} />
      </Button>

      <CustomPopUp
        title="Total Water Rebound"
        className="bg-white"
        open={open}
        clAction={() => setOpen(false)}
      >
        <p>Total water return data in current time query range.</p>
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
