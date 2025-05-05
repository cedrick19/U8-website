import { useState } from 'react';
import { Button, Icon } from 'framework7-react';
import profileImage from '@/assets/image/icons/avatarIcon.png';
import refreshImage from '@/assets/image/svg/refresh.svg';
import chatIcon from '@/assets/image/svg/chat.svg';
import customerServiceIcon from '@/assets/image/svg/customer-service.svg';
import { cn, clickNavigate } from '@/utils/helper';

export const UserCard = () => {
  const [isEyeOn, setIsEyeOn] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleRefreshClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
  };

  const actions = [
    {
      id: 'chat',
      label: 'Open Telegram channel',
      icon: chatIcon,
      onClick: () => window.open('https://t.me/SAMPLE', '_blank'),
    },
    {
      ...clickNavigate('support', 'support/'),
      label: 'Open customer support',
      icon: customerServiceIcon,
    },
  ];

  return (
    <div className="flex w-full items-center justify-between px-5">
      <div className="flex items-center gap-2">
        <img
          src={profileImage}
          alt="User profile"
          className="h-12 w-12 rounded-full border-2 border-gray-200 bg-blue-500"
        />

        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="mr-2 text-gray-800">beluga.cat</span>
            <div
              className="flex h-5 w-16 items-center justify-center rounded-full text-xs font-bold text-yellow-600"
              style={{
                backgroundImage: 'linear-gradient(to right, #d9a901, #FFD700, #d9a901)',
              }}
            >
              VIP 0
            </div>
            <Button onClick={() => setIsEyeOn(!isEyeOn)} className="ml-1">
              <Icon f7={isEyeOn ? 'eye_fill' : 'eye_slash_fill'} size={20} className="text-black" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-12 text-2xl font-bold">{isEyeOn ? '****' : '0.00'}</span>
            <button
              onClick={handleRefreshClick}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-gradient"
              aria-label="Refresh"
            >
              <img
                src={refreshImage}
                alt="Refresh"
                className={cn(
                  'transition-transform duration-1000',
                  isSpinning && 'rotate-[1080deg]',
                )}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {actions.map(({ id, label, icon, onClick }) => (
          <Button
            key={id}
            id={id}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-gradient p-2"
            onClick={onClick}
          >
            <img src={icon} className="h-full w-full" alt={label} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
