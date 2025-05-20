import { useState } from 'react';
import { Button, Icon } from 'framework7-react';
import profileImage from '@/assets/image/icons/avatarIcon.png';
import chatIcon from '@/assets/image/svg/chat.svg';
import customerServiceIcon from '@/assets/image/svg/customer-service.svg';
import { f7navigate } from '@/utils/helper';
import { UserInfoProps } from './type';

const supportButtons = [
  { id: 'Chat', icon: chatIcon, onClick: () => window.open('https://t.me/SAMPLE', '_blank') },
  { id: 'support', icon: customerServiceIcon, onClick: () => f7navigate('support', 'support/') },
];

const UserInfo: React.FC<UserInfoProps> = ({ isEyeOn, toggleEye, isSpinning, RefreshClick }) => (
  <div className="flex items-center gap-3">
    <img src={profileImage} alt="User" className="h-10 w-10 rounded-full border bg-blue-500" />
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <span className="text-gray-800">beluga.cat</span>
        <p className="flex h-5 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#d9a901] via-[#FFD700] to-[#d9a901] text-xs font-bold text-yellow-600">
          VIP 0
        </p>
        <Button onClick={toggleEye}>
          <Icon f7={isEyeOn ? 'eye_fill' : 'eye_slash_fill'} size={20} className="text-black" />
        </Button>
      </div>
      <div className="mt-1 flex gap-2 text-2xl font-bold">
        <span>{isEyeOn ? '****' : '0.00'}</span>
        <button
          onClick={RefreshClick}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-gradient"
        >
          <Icon
            f7="arrow_2_circlepath"
            color="white"
            size={17}
            className={`transition-transform duration-1000 ${isSpinning ? 'rotate-[1080deg]' : ''}`}
          />
        </button>
      </div>
    </div>
  </div>
);

const SupportButtons = () => (
  <div className="flex items-center gap-2">
    {supportButtons.map(({ id, icon, onClick }) => (
      <Button
        key={id}
        id={id}
        className="h-9 w-9 rounded-full bg-primary-gradient p-2"
        onClick={onClick}
      >
        <img src={icon} alt={id} />
      </Button>
    ))}
  </div>
);

export const UserCard: React.FC = () => {
  const [isEyeOn, setIsEyeOn] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleEye = () => setIsEyeOn(!isEyeOn);

  const handleRefreshClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
  };

  return (
    <div className="flex justify-between px-5">
      <UserInfo
        isEyeOn={isEyeOn}
        toggleEye={toggleEye}
        isSpinning={isSpinning}
        RefreshClick={handleRefreshClick}
      />
      <SupportButtons />
    </div>
  );
};

export default UserCard;
