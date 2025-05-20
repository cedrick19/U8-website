import { Button } from 'framework7-react';

import chatIcon from '@/assets/image/svg/chat.svg';
import customerServiceIcon from '@/assets/image/svg/customer-service.svg';
import { f7navigate } from '@/utils/helper';

const supportButtons = [
  { id: 'chat', icon: chatIcon, HandleRoute: () => window.open('https://t.me/SAMPLE', '_blank') },
  {
    id: 'support',
    icon: customerServiceIcon,
    HandleRoute: () => f7navigate('support', 'support/'),
  },
];

export const SupportButtons = () => (
  <div className="flex items-center gap-2">
    {supportButtons.map(({ id, icon, HandleRoute }) => (
      <Button
        key={id}
        id={id}
        className="h-9 w-9 rounded-full bg-primary-gradient p-2"
        onClick={HandleRoute}
      >
        <img src={icon} alt={id} />
      </Button>
    ))}
  </div>
);
