import { useState, useCallback } from "react";
import { Button } from "framework7-react";

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

  const userImages = {
    profile: "./assets/image/playerAccount.jpg",
    vip: "./assets/image/VIP.svg",
    eye: `./assets/image/${isEyeOn ? "eye-on" : "eye-off"}.svg`,
    refresh: "./assets/image/refresh.svg",
    icons: ["chat.svg", "customer-service.svg"],
  };

  return (
    <div className="space-y-5 rounded-b-[2rem] border-b-2 border-t-0 border-violet-300 p-2 pt-3 shadow-[0_10px_10px_0_rgba(139,92,246,0.3)]">
      <div className="flex w-full items-center justify-between p-3">
        <div className="flex items-center">
          <img
            src={userImages.profile}
            alt="Profile"
            className="h-12 w-12 rounded-full border-2 border-gray-200"
          />
          <div className="ml-3">
            <div className="flex items-center">
              <span className="mr-2 text-gray-800">username</span>
              <img src={userImages.vip} alt="VIP" />
              <img
                src={userImages.eye}
                className="ml-2 h-5 w-5 cursor-pointer"
                alt="eye toggle"
                onClick={toggleEye}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">0.00</span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-900">
                <img
                  src={userImages.refresh}
                  alt="refresh"
                  onClick={handleRefreshClick}
                  className={`h-3 w-3 cursor-pointer transition-transform duration-1000 ${isSpinning ? "rotate-[1080deg]" : ""}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          {userImages.icons.map((icon, i) => (
            <Button
              key={i}
              className="mr-1 flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 p-2 last:mr-0"
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
