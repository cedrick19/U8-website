import { Block, Page, Button } from 'framework7-react';
import { SupportNav } from './components';
import TelegramIcon from '@/assets/image/svg/telegram.svg';
import MeiQiaIcon from '@/assets/image/svg/customer_service1.svg';

type SupportChannel = {
  label: string;
  placeholder: string;
  icon: string;
  link: string;
};

const channels: SupportChannel[] = [
  {
    label: 'telegram',
    placeholder: '@t.me/sample',
    icon: TelegramIcon,
    link: 'https://facebook.com',
  },
  {
    label: 'meiQia',
    placeholder: '在线客服',
    icon: MeiQiaIcon,
    link: 'https://google.com',
  },
];

const SupportCard = ({ label, placeholder, icon, link }: SupportChannel) => (
  <>
    <p className="text-gradient font-bold">{label}</p>
    <div className="flex items-center justify-between gap-6 rounded-lg bg-white px-5 py-5">
      <div className="flex items-center space-x-2">
        <img src={icon} alt={label} className="h-7 w-7" />
        <p className="text-base">{placeholder}</p>
      </div>
      <Button
        className="h-9 rounded-lg bg-primary-gradient text-white"
        onClick={() => window.open(link)}
      >
        Chat Now
      </Button>
    </div>
  </>
);

const SupportPage = () => {
  return (
    <Page name="Support">
      <SupportNav title="24H Customer Service" />
      <Block>
        <div className="space-y-1 pb-20">
          {channels.map((c) => (
            <SupportCard key={c.label} {...c} />
          ))}
        </div>
      </Block>
    </Page>
  );
};

export default SupportPage;
