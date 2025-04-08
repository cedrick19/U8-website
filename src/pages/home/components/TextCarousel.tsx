import { useEffect, useRef, useState } from "react";

type Notification = {
  message: string;
  game: string;
  price: string;
};

export default function MarqueeNotification() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  const notificationData: Notification[] = [
    {
      message:
        "Congratulations to the player c**** in Canada win {price} of game {game}",
      game: "Mahjong",
      price: "40000Yuan",
    },
    {
      message:
        "Congratulations to the player B**** in Philippines win {price} of game {game}",
      game: "Lottery",
      price: "40000Yuan",
    },
    {
      message:
        "Congratulations to the player B**** in india win {price} of game {game}",
      game: "Bingo",
      price: "40000Yen",
    },
    {
      message:
        "Congratulations to the player h**** in malaysia win {price} of game {game}",
      game: "fishing",
      price: "4000Yen",
    },
  ];

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = contentRef.current.offsetWidth;

    let currentPosition = containerWidth;

    const animate = () => {
      if (currentPosition <= -contentWidth) {
        currentPosition = containerWidth;
      }

      currentPosition -= 1;
      setPosition(currentPosition);

      requestAnimationFrame(animate);
    };

    const animationFrameId: number = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const renderMessage = (template: string, price: string, game: string) => {
    const parts = template.split(/({price}|{game})/g);

    return parts.map((part, index) => {
      if (part === "{price}") {
        return (
          <span key={`price-${index}`} className="font-semibold text-green-600">
            {price}
          </span>
        );
      }
      if (part === "{game}") {
        return (
          <span key={`game-${index}`} className="font-semibold text-red-600">
            {game}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="mx-5 overflow-hidden rounded-full border-[4px] border-purple-900 bg-white shadow-md md:container md:mx-auto">
      <div
        ref={containerRef}
        className="relative flex h-[34px] w-full overflow-hidden rounded-full"
      >
        <div className="absolute left-0 top-0 z-10 flex h-full items-center rounded-l-full bg-purple-900 px-3">
          <img
            src="./assets/image/announcement.svg"
            className="h-6 w-6"
            alt="announcement"
          />
        </div>

        <div
          ref={contentRef}
          className="text-black-600 absolute flex h-full items-center whitespace-nowrap pl-12"
          style={{
            transform: `translateX(${position}px)`,
            whiteSpace: "nowrap",
          }}
        >
          <div className="flex items-center">
            {[...notificationData, ...notificationData].map((item, index) => (
              <span key={index} className="mr-8 flex items-center px-2">
                <span className="font-medium">
                  {renderMessage(item.message, item.price, item.game)}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
