import Layout from "@/layout/layout";
import { PageData } from "@/ts/PageData";
import { Page, Block, List, ListItem } from "framework7-react";

const GamesPage = () => {
  return (
    <Page name="games">
      <Layout>
        <Block>
          This is a test for games page for mobile! Feel free to access these
          sites:
        </Block>
        <List>
          {PageData.filter((page) => page.category === "games").map(
            ({ name, path }, index) => (
              <ListItem key={index} title={`Play ${name}`} link={path} />
            ),
          )}
        </List>
      </Layout>
    </Page>
  );
};

export default GamesPage;
