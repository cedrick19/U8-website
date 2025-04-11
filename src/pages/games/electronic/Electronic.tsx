import { Block, Card, CardContent, Page, Searchbar } from 'framework7-react';
import { NavBar } from '../components';
import { getDevice } from 'framework7';

const Electronic = () => {
  const isMobile = getDevice().android || getDevice().ios;

  return (
    <Page name="electronic" className="h-full bg-[#ECE8F5] pb-20">
      <NavBar title="Electronic" />

      {isMobile && (
        <Block className="m-0">
          <Searchbar />

          <div className="grid h-full grid-cols-2">
            {[...Array(14)].map((_, ids) => (
              <Card key={ids}>
                <CardContent padding={false}>
                  <img
                    src="https://kk-hongkong-new.dbq9.com/game/pg/516.jpg"
                    alt="laro"
                    className="rounded-xl"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </Block>
      )}
    </Page>
  );
};

export default Electronic;
