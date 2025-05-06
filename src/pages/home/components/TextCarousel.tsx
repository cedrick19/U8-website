import { cn } from '@/utils/helper';
import Announcement from '@/assets/image/svg/announcement.svg';

interface MarqueeMsgType {
  name: string;
  country: string;
  game: string;
  price: string;
}
const marqueeTemplate =
  'Congratulations to the player {name} in {country} win \n{price}\n of game \n\n{game}\n\n.';
const marqueeData: MarqueeMsgType[] = [
  { name: 'K** J*-w**', country: 'Germany', game: 'Lotto', price: '40000 Yuan' },
];

export const TextCarousel = () => {
  const renderMessage = (template: string, data: MarqueeMsgType) =>
    template
      .replace(/{(name|country|game|price)}/g, (_, key) => data[key as keyof MarqueeMsgType])
      .split('\n\n')
      .map((para, i) => (
        <span key={i}>
          {para.split('\n').map((line, j) => (
            <span
              key={j}
              className={cn(
                line.trim() === data.price && 'text-green-500',
                line.trim() === data.game && 'text-blue-500',
              )}
            >
              {line}
            </span>
          ))}
        </span>
      ));
  return (
    <div className="flex rounded-full bg-primary-gradient p-1 md:container md:mx-auto">
      <div className="flex h-8 w-20 items-center justify-center">
        <img src={Announcement} className="h-6 w-6" alt="announcement" />
      </div>
      <div className="relative flex w-full items-center overflow-hidden rounded-r-full bg-white">
        <div className="absolute left-[100%] flex min-w-max animate-marquee will-change-transform">
          {marqueeData.map((data, i) => (
            <div key={i}>{renderMessage(marqueeTemplate, data)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
