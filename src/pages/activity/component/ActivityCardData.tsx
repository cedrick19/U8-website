import { Card, CardContent, CardHeader, Chip, Icon } from 'framework7-react';

import AllActivity from '@/assets/image/activities/all-activity.png';

interface ActivityData {
  category: string;
}

export const ActivityCardData = ({ category }: ActivityData) => {
  return (
    <Card raised className="rounded-xl">
      <CardContent padding={false} className="h-full rounded-xl bg-[#ECE8F5]">
        <div className="relative h-40 w-full overflow-hidden rounded-xl">
          <div className="flex justify-end">
            <Chip
              text={category}
              className="w-36 justify-center rounded-lg rounded-br-none rounded-tl-none bg-primary-gradient font-bold text-white"
            />
          </div>

          <img
            loading="lazy"
            src={AllActivity}
            alt={'title'}
            className="absolute top-2 h-full w-auto"
          />
        </div>

        <CardHeader className="justify-normal gap-3 rounded-b-xl rounded-t-none border-0 bg-white text-lg font-semibold">
          <Icon f7="clock" size={'24px'} className="text-gradient rotate-[100deg]" />
          Long-Term Activities
        </CardHeader>
      </CardContent>
    </Card>
  );
};

export default ActivityCardData;
