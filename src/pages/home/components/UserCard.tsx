import { useState, useCallback } from 'react';
import { Button } from 'framework7-react';

import profileImage from '@/assets/image/playeraccount.jpg';

import refreshImage from '@/assets/image/refresh.svg';
import chatIcon from '@/assets/image/chat.svg';
import customerServiceIcon from '@/assets/image/customer-service.svg';

const UserCard = () => {
  const [isEyeOn, setIsEyeOn] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleEye = useCallback(() => {
    setIsEyeOn((prev) => !prev);
  }, []);

  const handleRefreshClick = useCallback(() => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
  }, []);

  return (
    <div className="flex w-full items-center justify-between p-3">
      <div className="flex items-center">
        <img
          src={profileImage}
          alt="Profile"
          className="h-12 w-12 rounded-full border-2 border-gray-200"
        />
        <div className="ml-3">
          <div className="flex items-center">
            <span className="mr-2 text-gray-800">username</span>

            <div
              className="flex h-5 w-[61px] items-center justify-center rounded-full text-center text-xs font-bold text-black"
              style={{
                backgroundImage: 'linear-gradient(to right, #d9a901, #FFD700, #d9a901)',
              }}
            >
              VIP 0
            </div>

            <img
              src={`/assets/image/${isEyeOn ? 'eye-on' : 'eye-off'}.svg`}
              className="ml-2 h-5 w-5 cursor-pointer"
              alt="eye toggle"
              onClick={toggleEye}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">0.00</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-900">
              <img
                src={refreshImage}
                alt="refresh"
                onClick={handleRefreshClick}
                className={`h-3 w-3 cursor-pointer transition-transform duration-1000 ${isSpinning ? 'rotate-[1080deg]' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        {[chatIcon, customerServiceIcon].map((icon, i) => (
          <Button
            key={i}
            className="mr-1 flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 p-2 last:mr-0"
          >
            <img src={icon} className="h-full w-full" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
