import { Block, Page, Searchbar } from 'framework7-react';
import { NavBar, TileImage } from '../components';
import { getDevice } from 'framework7';

const Electronic = () => {
  const isMobile = getDevice().android || getDevice().ios;

  return (
    <Page name="electronic" className="h-full bg-[#ECE8F5] pb-20">
      <NavBar title="Electronic" />

      {isMobile && (
        <Block className="m-0 pb-10 pt-5">
          <Searchbar inline textColor="red" />

          <div className="grid h-full grid-cols-2">
            {[...Array(14)].map((_, ids) => (
              <TileImage key={ids} image="https://kk-hongkong-new.dbq9.com/game/pg/516.jpg" />
            ))}
          </div>
        </Block>
      )}
    </Page>
  );
};

export default Electronic;
