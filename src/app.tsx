import type React from "react";
import { App, Page, View, Views } from "framework7-react";
import NavBar from "./components/nav-bar/Navigation";
import appRoutes from "./ts/appRoutes";
import { getDevice } from "framework7";
import { ToolMobile } from "./components/nav-bar";
import HomePage from "./pages/home";
import GamesIndexPage from "./pages/games";
import ActivityPage from "./pages/activity/Activity";
import ProfilePage from "./pages/profile/profile";

const appConfig = {
  name: "u8",
  theme: "auto",
  routes: appRoutes,
};

const TabRoutes = [
  {
    path: "/home/",
    id: "home",
    content: HomePage,
  },
  {
    path: "/games/",
    id: "games",
    content: GamesIndexPage,
  },
  {
    path: "/activity/",
    id: "activity",
    content: ActivityPage,
  },
  {
    path: "/profile/",
    id: "profile",
    content: ProfilePage,
  },
]

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
        <Views tabs>
          <ToolMobile />
          {TabRoutes.map((tabRoute, ids) => (
            <View
              key={ids}
              tab
              main={tabRoute.path === "Home"}
              url={tabRoute.path}
              tabActive={tabRoute.path === "home"}
              name={tabRoute.id}
            />
          ))}
        </Views>
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
