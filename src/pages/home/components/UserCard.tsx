import { useState, useCallback } from 'react';
import { Button, Icon } from 'framework7-react';
import profileImage from '@/assets/image/avatarIcon.png';
import refreshImage from '@/assets/image/refresh.svg';
import chatIcon from '@/assets/image/chat.svg';
import customerServiceIcon from '@/assets/image/customer-service.svg';
import { cn } from '@/globals/utils';

export const UserCard = () => {
  const [isEyeOn, setIsEyeOn] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleRefreshClick = useCallback(() => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
  }, []);

  const actions = [
    {
      href: 'https://t.me/SAMPLE',
      icon: chatIcon,
      label: 'Open Telegram channel',
      external: true,
    },
    {
      href: '/support/',
      icon: customerServiceIcon,
      label: 'Open customer support',
      external: false,
    },
  ];
  return (
    <div className="flex w-full items-center justify-between px-5 py-3">
      <div className="flex flex-row items-center gap-2">
        <img
          src={profileImage}
          alt="Profile"
          className="h-12 w-12 rounded-full border-2 border-gray-200 bg-blue-500"
        />

        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <span className="mr-2 text-gray-800">beluga.cat</span>
            <div
              className="flex h-5 w-16 items-center justify-center rounded-full text-center text-xs font-bold text-yellow-600"
              style={{
                backgroundImage: 'linear-gradient(to right, #d9a901, #FFD700, #d9a901)',
              }}
            >
              VIP 0
            </div>
            <Button onClick={() => setIsEyeOn(!isEyeOn)}>
              <Icon f7={isEyeOn ? 'eye_fill' : 'eye_slash_fill'} size={20} className="text-black" />
            </Button>
          </div>

          <div className="flex flex-row items-center gap-2">
            <span className="w-12 text-2xl font-bold">{isEyeOn ? '****' : '0.00'}</span>
            <>
              <button
                onClick={handleRefreshClick}
                className="h-6 w-6 items-center justify-center rounded-full bg-primary-gradient"
              >
                <img
                  src={refreshImage}
                  alt="refresh"
                  className={cn(
                    'cursor-pointer justify-self-center transition-transform duration-1000',
                    isSpinning && 'rotate-[1080deg]',
                  )}
                />
              </button>
            </>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {actions.map(({ href, icon, label, external }) => (
          <Button
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener' } : {})}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 p-2"
          >
            <img src={icon} className="h-full w-full" alt="" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
