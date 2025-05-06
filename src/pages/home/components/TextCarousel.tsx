import Announcement from '@/assets/image/svg/announcement.svg';

const marqueeData = [
  {
    playerName: 'john89',
    countryName: 'Canada',
    game: 'Mahjong.',
    price: '40000 Yuan',
  },
  {
    playerName: 'cedrick99',
    countryName: 'Philippines',
    game: 'Lotto.',
    price: '40000 Pesos',
  },
];

export const TextCarousel = () => {
  const renderMessages = () =>
    marqueeData.map(({ playerName, countryName, game, price }, index) => (
      <span key={index} className="flex">
        <span>{`Congratulations to the player ${playerName} in ${countryName} win`}</span>
        <span className="mx-1 text-green-500">{price}</span>
        <span>of game</span>
        <span className="mx-1 text-blue-500">{game}</span>
      </span>
    ));

  return (
    <div className="flex rounded-full bg-primary-gradient p-1 md:container md:mx-auto">
      <div className="flex h-8 w-20 items-center justify-center">
        <img src={Announcement} className="h-6 w-6" alt="announcement" />
      </div>
      <div className="relative flex w-full items-center overflow-hidden rounded-r-full bg-white">
        <div className="flex min-w-max animate-marquee will-change-transform">
          {renderMessages()}
          {renderMessages()}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
