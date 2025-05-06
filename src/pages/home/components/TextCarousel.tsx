import { cn } from '@/utils/helper';
import Announcement from '@/assets/image/svg/announcement.svg';

interface MarqueeMsgType {
  name: string;
  country: string;
  game: string;
  price: string;
}

const marqueeMsg =
  'Congratulations to the player {name} in {country} win \n{price}\n of game \n\n{game}\n\n. ';
const marqueeData: MarqueeMsgType[] = [
  {
    name: 'K** J*-w**',
    country: 'Germany',
    game: 'Lotto',
    price: '40000 Yuan',
  },
];

export const TextCarousel = () => {
  const formatParagraph = (par: string, data: MarqueeMsgType, paraId: number) => (
    <span key={paraId}>
      {par.split('\n').map((line, idx) => (
        <span
          key={idx}
          className={cn(
            line.trim() === data.price && 'text-green-500',
            line.trim() === data.game && 'text-blue-500',
          )}
        >
          {line}
        </span>
      ))}
    </span>
  );

  const renderMessages = (template: string, data: MarqueeMsgType) => {
    const content = Object.entries(data).reduce(
      (acc, [key, value]) => acc.replace(`{${key}}`, value),
      template,
    );
    return content
      .split('\n\n')
      .map((paragraph, paraIds) => formatParagraph(paragraph, data, paraIds));
  };

  return (
    <div className="flex rounded-full bg-primary-gradient p-1 md:container md:mx-auto">
      <div className="flex h-8 w-20 items-center justify-center">
        <img src={Announcement} className="h-6 w-6" alt="announcement" />
      </div>
      <div className="relative flex w-full items-center overflow-hidden rounded-r-full bg-white">
        <div className="absolute left-[100%] flex min-w-max animate-marquee will-change-transform">
          {marqueeData.map((data, index) => (
            <div key={index}>{renderMessages(marqueeMsg, data)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
