import { useState } from 'react';

import profileImage from '@/assets/image/playeraccount.jpg';
import refreshImage from '@/assets/image/refresh.svg';
import chatIcon from '@/assets/image/chat.svg';
import customerServiceIcon from '@/assets/image/customer-service.svg';
import eyeOnIcon from '@/assets/image/eye-on.svg';
import eyeOffIcon from '@/assets/image/eye-off.svg';

const UserCard: React.FC = () => {
  const [isEyeOn, setIsEyeOn] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleEye = () => setIsEyeOn((p) => !p);

  const handleRefreshClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
  };
  return (
    <div className="flex w-full items-center justify-between p-3">
      <div className="flex items-center">
        <img
          src={profileImage}
          alt="Profile picture"
          className="h-12 w-12 rounded-full border-2 border-gray-200"
        />
        <div className="ml-3">
          <div className="flex items-center">
            <span className="mr-2 text-gray-800">username</span>

            <span className="flex h-5 w-[70px] items-center justify-center rounded-full bg-gradient-to-r from-[#d9a901] via-[#FFD700] to-[#d9a901] text-center text-xs font-bold text-yellow-700">
              VIP&nbsp;0
            </span>

            <img
              src={isEyeOn ? eyeOnIcon : eyeOffIcon}
              className="ml-2 h-5 w-5 cursor-pointer"
              alt={isEyeOn ? 'Hide balance' : 'Show balance'}
              onClick={toggleEye}
            />
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-2xl font-bold">{isEyeOn ? '0.00' : '•••'}</span>

            <button
              onClick={handleRefreshClick}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-900"
              aria-label="Refresh balance"
            >
              <img
                src={refreshImage}
                alt=""
                className={`h-3 w-3 transition-transform duration-700 ${
                  isSpinning ? 'rotate-[1080deg]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <a
          href="https://t.me/SAMPLE"
          target="_blank"
          rel="noopener"
          aria-label="Open Telegram channel"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 p-2"
        >
          <img src={chatIcon} className="h-full w-full" alt="" />
        </a>

        <a
          href="/support/"
          aria-label="Open customer support"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 p-2"
        >
          <img src={customerServiceIcon} className="h-full w-full" alt="" />
        </a>
      </div>
    </div>
  );
};

export default UserCard;
