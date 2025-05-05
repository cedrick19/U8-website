import { Block, f7, Icon, Link, Page } from 'framework7-react';

import { MobileNavbar } from '@/components';

import { gameInfo } from './utils';
import { TileMenu } from './components';

const Games = () => {
  const renderNavright = () => {
    return (
      <>
        <p className="text-xl font-extrabold">0.00</p>
        <Link
          id="notifications"
          href="/notifications/"
          onClick={() => {
            document.getElementById('notifications')?.blur();
          }}
        >
          <Icon material="notifications" size={35} className="text-gradient" />
        </Link>
      </>
    );
  };

  return (
    <Page name="games">
      <MobileNavbar navRight={renderNavright()} mode={'home'} />

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
