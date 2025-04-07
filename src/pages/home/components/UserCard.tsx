import { useState, useCallback } from "react";
import { Button } from "framework7-react";
import TextCarousel from "./TextCarousel";

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
    <div className="space-y-5 rounded-b-[2rem] border-violet-800 p-2 pt-3 shadow-[0_4px_10px_rgba(138,43,226,0.5),0_2px_5px_rgba(138,43,226,0.3)]">
      <TextCarousel />
      <div className="flex w-full items-center justify-between p-3">
        <div className="flex items-center">
          <img
            src="./assets/image/playeraccount.jpg"
            alt="Profile"
            className="h-12 w-12 rounded-full border-2 border-gray-200"
          />
          <div className="ml-3">
            <div className="flex items-center">
              <span className="mr-2 text-gray-800">username</span>
              <img src="./assets/image/VIP.svg" alt="VIP" />
              <img
                src={`./assets/image/${isEyeOn ? "eye-on" : "eye-off"}.svg`}
                className="ml-2 h-5 w-5 cursor-pointer"
                alt="eye toggle"
                onClick={toggleEye}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">0.00</span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-900">
                <img
                  src="./assets/image/refresh.svg"
                  alt="refresh"
                  onClick={handleRefreshClick}
                  className={`h-3 w-3 cursor-pointer transition-transform duration-1000 ${
                    isSpinning ? "rotate-[1080deg]" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          {["chat.svg", "customer-service.svg"].map((icon, i) => (
            <Button
              key={i}
              className="mr-1 flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 last:mr-0"
            >
              <img src={`./assets/image/${icon}`} className="h-full w-full" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
