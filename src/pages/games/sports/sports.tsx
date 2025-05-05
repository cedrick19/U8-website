import { Block, Page } from 'framework7-react';
import { getDevice } from 'framework7';

import { MobileNavbar } from '@/components';

import { TileWithButton } from '../components';
import { sportsData } from '../utils';

const Sports = () => {
  const isMobile = getDevice().ios || getDevice().android;

  return (
    <Page name="Sports" className="bg-[#ECE8F5] pb-20">
      <MobileNavbar mode="notify" title="Sports" />

      {isMobile && (
        <Block className="m-0">
          {sportsData.map((sport) => (
            <TileWithButton
              key={sport.title}
              title={sport.title}
              description={sport.description}
              image={sport.image}
            />
          ))}
        </Block>
      )}

      {!isMobile && (
        <Block>
          <h1>Under Construction</h1>
        </Block>
      )}
    </Page>
  );
};

export default Sports;
