import { VideoProps } from './interface';

import { Block } from 'framework7-react';

import { TileWithButton } from '../components';

const MobileView = ({ videos }: VideoProps) => {
  return (
    <Block className="m-0">
      {videos.map((video) => (
        <TileWithButton
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
