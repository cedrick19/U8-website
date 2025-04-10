import React from 'react';

export default function MarqueeNotification() {
  const notificationData = [
    {
      message: 'Congratulations to the player c**** in Canada win {price} of {game}',
      game: 'Mahjong',
      price: '40000Yuan',
    },
  ];

  return (
    <div className="mx-5 flex overflow-hidden rounded-full bg-purple-900 p-1 md:container md:mx-auto">
      <div className="flex h-8 w-20 items-center justify-center">
        <img src="./assets/image/announcement.svg" className="h-6 w-6" alt="announcement" />
      </div>
      <div className="flex w-full items-center overflow-hidden whitespace-nowrap rounded-r-full bg-white">
        <p className="animate-marquee inline-block">
          {notificationData.map(({ message, game, price }) => (
            <span key={message}>
              {message.split('{price}').map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index === 0 ? (
                    <span className="text-green-500">{price}</span>
                  ) : (
                    <span className="text-blue-500">{game}</span>
                  )}
                </React.Fragment>
              ))}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
