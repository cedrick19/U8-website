import { Block, f7, Icon, Page } from 'framework7-react';

import HomeNavbar from '@/components/MobileNavbar/HomeNavbar';

import { gameInfo } from './utils';
import { TileMenu } from './components';

const Games = () => {
  const renderNavright = () => {
    return (
      <>
        <p className="text-xl font-extrabold">0.00</p>
        <Icon material="notifications" size={35} className="text-gradient" />
      </>
    );
  };

  return (
    <Page name="games">
      <HomeNavbar navRight={renderNavright()} />
      <Block className="pb-20">
        {gameInfo.map((game) => (
          <TileMenu
            key={game.title}
            title={game.title}
            image={game.image}
            description={game.description}
            onNavigate={() => f7.view.main.router.navigate(game.route)}
          />
        ))}
      </Block>
    </Page>
  );
};

export default Games;
