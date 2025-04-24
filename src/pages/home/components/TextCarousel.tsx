import { Fragment } from 'react/jsx-runtime';
import Announcement from '@/assets/image/announcement.svg';

export default function MarqueeNotification() {
  const notificationData = [
    {
      message: 'Congratulations to the player c**** in Canada win {price} of game ',
      game: 'Mahjong',
      price: '40000Yuan',
    },
    {
      message: 'Congratulations to the player B**** in Philippines win {price} of game ',
      game: 'Lottery',
      price: '50000Pesos',
    },
  ];

  const renderMessages = () =>
    notificationData.map(({ message, game, price }, index) => (
      <span key={index} className="mr-10">
        {message.split('{price}').map((part, partIndex) => (
          <Fragment key={partIndex}>
            {part}
            {partIndex === 0 ? (
              <span className="text-green-500">{price}</span>
            ) : (
              <span className="text-blue-500">{game}</span>
            )}
          </Fragment>
        ))}
      </span>
    ));

  return (
    <div className="mx-5 flex overflow-hidden rounded-full bg-purple-900 p-1 md:container md:mx-auto">
      <div className="flex h-8 w-20 items-center justify-center">
        <img src={Announcement} className="h-6 w-6" alt="announcement" />
      </div>
      <div className="relative flex w-full items-center overflow-hidden whitespace-nowrap rounded-r-full bg-white">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          <div className="flex">{renderMessages()}</div>
          <div className="flex">{renderMessages()}</div>
        </div>
      </div>
    </div>
  );
}
