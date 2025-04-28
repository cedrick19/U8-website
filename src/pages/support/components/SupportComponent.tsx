import TelegramIcon from '@/assets/image/telegram.svg';
import MeiQiaIcon from '@/assets/image/customer_service1.svg';
import { Button } from 'framework7-react';

type SupportChannel = {
  label: string;
  handle: string;
  icon: string;
};

const CHANNELS: SupportChannel[] = [
  { label: 'telegram', handle: '@telegram', icon: TelegramIcon },
  { label: 'meiQia', handle: 'Chinese', icon: MeiQiaIcon },
];

const SupportCard = ({ label, handle, icon }: SupportChannel) => (
  <>
    <p className="text-gradient font-bold">{label}</p>
    <div className="flex items-center justify-between gap-6 rounded-lg bg-white px-5 py-5">
      <div className="flex items-center space-x-2">
        <img src={icon} alt={label} className="h-7 w-7" />
        <p className="text-base">{handle}</p>
      </div>
      <Button className="h-9 rounded-lg bg-primary-gradient text-white">Chat Now</Button>
    </div>
  </>
);

const SupportComponent = () => (
  <div className="space-y-1 pb-20">
    {CHANNELS.map((c) => (
      <SupportCard key={c.label} {...c} />
    ))}
  </div>
);

export default SupportComponent;
