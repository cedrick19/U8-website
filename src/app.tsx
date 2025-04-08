import type React from "react";
import { App, Page, Tab, Tabs, View } from "framework7-react";
import NavBar from "./components/nav-bar/Navigation";
import appRoutes from "./ts/appRoutes";
import { getDevice } from "framework7";
import { ToolMobile } from "./components/nav-bar";
import HomePage from "./pages/home";
import GamesIndexPage from "./pages/games";
import ActivityPage from "./pages/activity/Activity";
import ProfilePage from "./pages/profile/ProfilePage";

const appConfig = {
  name: "u8",
  theme: "auto",
  routes: appRoutes,
};

const MyApp: React.FC = () => {
  const isMobile = getDevice().android || getDevice().ios;

  const renderWeb = () => {
    return (
      <>
        <NavBar />
        <View main tab url="/" browserHistory browserHistorySeparator="" />
      </>
    );
  };

  const renderMobile = () => {
    return (
      <>
        <ToolMobile />
        <Tabs>
          <Tab id="home" tabActive>
            <HomePage />
          </Tab>
          <Tab id="games">
            <GamesIndexPage />
          </Tab>
          <Tab id="activity">
            <ActivityPage />
          </Tab>
          <Tab id="profile">
            <ProfilePage />
          </Tab>
        </Tabs>
      </>
    );
  };

  return (
    <App {...appConfig}>
      <Page pageContent={false}>
        {!isMobile ? renderWeb() : renderMobile()}
      </Page>
    </App>
  );
};

export default MyApp;
