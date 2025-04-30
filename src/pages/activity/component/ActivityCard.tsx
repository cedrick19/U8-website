import { CardContent } from 'framework7-react';
import ActivityBg from '@/assets/image/svg/activity_card.svg';

interface ActivityCard {
  icon: string;
  title: string;
  navigate: () => void;
}

export const ActivityCard = ({ icon, title, navigate }: ActivityCard) => {
  return (
    <>
      <div
        className="relative flex h-40 w-full overflow-hidden rounded-2xl shadow-sm"
        onClick={navigate}
      >
        <img src={ActivityBg} alt="activity" className="absolute h-full w-full object-cover" />
        <CardContent className="flex flex-col items-center justify-center gap-2">
          <img src={icon} alt={title} className="h-10 w-10 object-contain" />
          <p className="text-gradient text-center text-2xl font-extrabold">{title}</p>
        </CardContent>
      </div>
    </>
  );
};

export default ActivityCard;
