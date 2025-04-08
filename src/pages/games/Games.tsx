import HomeNavbar from "@/components/MobileNavbar/HomeNavbar";
import Layout from "@/layout/layout";
import { Icon } from "framework7-react";

import { Page, Block } from "framework7-react";

const GamesIndexPage = () => {
  return (
    <Page name="game-index">
      <HomeNavbar
        navRight={
          <>
            <Icon
              material="notifications"
              size={30}
              className="text-[#4A226E]"
            />
          </>
        }
      />
      <Layout>
        <Block>
          This is a test for games page for mobile! Feel free to access these
          sites:
        </Block>
      </Layout>
    </Page>
  );
};

export default GamesIndexPage;
