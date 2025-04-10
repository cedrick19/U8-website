import { Block, f7, Page } from "framework7-react";

import HomeNavbar from "@/components/MobileNavbar/HomeNavbar";

import { gameInfo } from "./utils";
import { TileMenu } from "./components";

const Games = () => {
  return (
    <Page name="games">
      <HomeNavbar />
      <Block className="pb-8">
        {gameInfo.map((game) => (
          <TileMenu
            title={game.title}
            image={game.image}
            onNavigate={() => f7.view.main.router.navigate(game.route)}
          />
        ))}
      </Block>
    </Page>
  );
};

export default Games;
