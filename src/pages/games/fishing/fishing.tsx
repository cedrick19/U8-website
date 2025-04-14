import { Block, Button, Page, Searchbar } from 'framework7-react';
import { NavBar, TileImage } from '../components';
import { getDevice } from 'framework7';

const Fishing = () => {
  const isMobile = getDevice().ios || getDevice().android;

  return (
    <Page name="fishing" className="h-full bg-[#ECE8F5] pb-20">
      <NavBar title="Fishing" />

      {isMobile && (
        <Block className="m-0 pt-5">
          <Searchbar inline className="mb-5" />
          <Block className="m-0">
            <Button
              fill
              round
              raised
              className="w-full bg-primary-gradient font-extrabold"
              largeIos
            >
              CQ9
            </Button>
          </Block>

          <div className="grid h-full grid-cols-2">
            {[...Array(4)].map((_, ids) => (
              <TileImage
                key={ids}
                image="https://kk-hongkong-hall-new.dbq9.com/temps/images/2024/08/14/%E6%AC%A2%E4%B9%90%E6%8D%95%E9%B1%BC.jpg"
              />
            ))}
          </div>
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

export default Fishing;
