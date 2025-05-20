import { useState } from 'react';
import { Button, Icon } from 'framework7-react';
import profileImage from '@/assets/image/icons/avatarIcon.png';

export const UserInfo: React.FC = () => {
  const [isEyeOn, setIsEyeOn] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const toggleEye = () => setIsEyeOn(!isEyeOn);
  const handleRefreshClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
  };

  return (
    <div className="flex items-center gap-2">
      <img src={profileImage} alt="User" className="h-10 w-10 rounded-full bg-blue-500" />
      <div className="flex-col">
        <div className="flex items-center gap-2">
          <span>beluga.cat</span>
          <p className="flex h-5 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#d9a901] via-[#FFD700] to-[#d9a901] text-xs font-bold text-yellow-600">
            VIP 0
          </p>
          <Button onClick={toggleEye} className="p-0">
            <Icon f7={isEyeOn ? 'eye_fill' : 'eye_slash_fill'} size={20} className="text-black" />
          </Button>
        </div>
        <div className="mt-1 flex gap-2">
          <span className="text-2xl font-bold">{isEyeOn ? '****' : '0.00'}</span>
          <button
            onClick={handleRefreshClick}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-gradient"
          >
            <Icon
              f7="arrow_2_circlepath"
              color="white"
              size={15}
              className={`transition-transform duration-1000 ${isSpinning ? 'rotate-[1080deg]' : ''}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
