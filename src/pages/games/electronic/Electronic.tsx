import { Block, Page, Searchbar } from 'framework7-react';
import { getDevice } from 'framework7';

import { MobileNavbar, SegmentedTabs } from '@/components';

import { TileImage } from '../components';

const electronicGames = [
  {
    tabName: 'PG SOFT',
    component: (
      <div className="grid h-full grid-cols-2">
        {[...Array(14)].map((_, ids) => (
          <TileImage key={ids} image="https://kk-hongkong-new.dbq9.com/game/pg/516.jpg" />
        ))}
      </div>
    ),
  },
  {
    tabName: 'PRAGMATIC PLAY',
    component: (
      <div className="grid h-full grid-cols-2">
        {[...Array(14)].map((_, ids) => (
          <TileImage key={ids} image="https://kk-hongkong-new.dbq9.com/game/PP/vs20fruitsw.png" />
        ))}
      </div>
    ),
  },
];

const Electronic = () => {
  const isMobile = getDevice().android || getDevice().ios;

  return (
    <Page name="electronic" className="h-full bg-[#ECE8F5]">
      <MobileNavbar mode="notify" title="Electronic" />

      {isMobile && (
        <Block className="m-0 flex flex-col gap-5 pt-5">
          <Searchbar inline textColor="red" />
          <SegmentedTabs tabArray={electronicGames} />
        </Block>
      )}
    </Page>
  );
};

export default Electronic;
