import { Block, Page } from 'framework7-react';
import { NavBar, TileWithButton } from '../components';
import { sportsData } from '../utils';
import { getDevice } from 'framework7';

const Sports = () => {
  const isMobile = getDevice().ios || getDevice().android;

  return (
    <Page name="Sports" className="bg-[#ECE8F5] pb-20">
      <NavBar title="Sports" />

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
