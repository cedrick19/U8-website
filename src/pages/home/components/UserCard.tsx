import { useState } from 'react';
import { Button, Icon } from 'framework7-react';
import profileImage from '@/assets/image/icons/avatarIcon.png';
import refreshImage from '@/assets/image/svg/refresh.svg';
import chatIcon from '@/assets/image/svg/chat.svg';
import customerServiceIcon from '@/assets/image/svg/customer-service.svg';
import { cn, f7navigate } from '@/utils/helper';

export const UserCard = () => {
  const [isEyeOn, setIsEyeOn] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const handleRefreshClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
  };
  const actions = [
    { icon: chatIcon, onClick: () => window.open('https://t.me/SAMPLE', '_blank') },
    { icon: customerServiceIcon, onClick: () => f7navigate('support', 'support/') },
  ];

  return (
    <div className="flex justify-between px-5">
      <div className="flex items-center">
        <img
          src={profileImage}
          alt="User profile"
          className="mr-1 h-10 w-10 rounded-full border-gray-200 bg-blue-500"
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="mr-2 text-gray-800">beluga.cat</span>
            <div className="flex h-5 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#d9a901] via-[#FFD700] to-[#d9a901]">
              <p className="text-xs font-bold text-yellow-600">VIP 0</p>
            </div>
            <Button onClick={() => setIsEyeOn(!isEyeOn)}>
              <Icon f7={isEyeOn ? 'eye_fill' : 'eye_slash_fill'} size={20} className="text-black" />
            </Button>
          </div>
          <div className="flex gap-2">
            <span className="text-2xl font-bold">{isEyeOn ? '****' : '0.00'}</span>
            <button
              onClick={handleRefreshClick}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-gradient"
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
        {actions.map(({ icon, onClick }) => (
          <Button className="flex h-9 w-9 rounded-full bg-primary-gradient p-2" onClick={onClick}>
            <img src={icon} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
