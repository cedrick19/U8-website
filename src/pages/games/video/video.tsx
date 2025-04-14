import { Block, Page } from 'framework7-react';

import { NavBar } from '../components';
import { getDevice } from 'framework7';
import MobileView from './MobileView';
import { videoData } from './utils';

const VideoPage = () => {
  const isMobile = getDevice().android || getDevice().ios;

  return (
    <Page name="video" className="bg-[#ECE8F5]">
      <NavBar title="Video" />

      {isMobile && <MobileView videos={videoData} />}

      {!isMobile && (
        <Block>
          <h1>Under Construction</h1>
        </Block>
      )}
    </Page>
  );
};

export default VideoPage;
