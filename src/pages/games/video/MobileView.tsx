import { IVideo, VideoProps } from './interface';

import { Block, Button, Card, CardContent } from 'framework7-react';

import { cn } from '@/globals/utils';

const CardVideo = ({ title, description, image }: IVideo) => {
  const circle = () => {
    return (
      <div className="absolute bottom-0 h-[110px] w-full rounded-b-lg">
        <div className="relative h-full w-full">
          <div
            className="absolute bottom-0 left-0 h-full w-full rounded-bl-lg bg-[#D5CEF3]"
            style={{ clipPath: 'circle(34% at 5% 100%)' }}
          />
          <div
            className="absolute bottom-0 left-0 h-full w-full rounded-bl-lg bg-[#B8ADE9]"
            style={{ clipPath: 'circle(24% at 5% 100%)' }}
          />
          <div
            className="absolute bottom-0 left-0 h-full w-full rounded-bl-lg bg-[#A598E2]"
            style={{ clipPath: 'circle(16% at 5% 100%)' }}
          />
        </div>
      </div>
    );
  };

  return (
    <Card
      raised
      className={cn('relative h-52', `bg-transparent bg-cover bg-right-bottom`)}
      style={{ backgroundImage: `url(${image})` }}
    >
      <CardContent className="top-5 z-10 h-full w-full p-5">
        <Block className="w-2/3">
          <h2 className="text-gradient text-left text-3xl font-extrabold">{title.toUpperCase()}</h2>
          <p className="text-lg italic">{description}</p>
          <Button fill raised round className="w-28 bg-primary-gradient">
            Enter
          </Button>
        </Block>
      </CardContent>

      {circle()}
    </Card>
  );
};

const MobileView = ({ videos }: VideoProps) => {
  return (
    <Block>
      {videos.map((video) => (
        <CardVideo
          key={video.title}
          title={video.title}
          description={video.description}
          image={video.image}
        />
      ))}
    </Block>
  );
};

export default MobileView;
