import type React from "react";

import { App, f7, View } from "framework7-react";
import { useEffect } from "react";
import routes from "./ts/routes";
import NavBar from "./components/nav-bar/Navigation";
import { AuthProvider } from "./components/AuthContext";
import { CustomModal } from "./components/CustomModal";
import { getDevice } from "framework7";

const appConfig = {
  name: "gamingwebsite",
  theme: "auto",
  routes,
};

const MyApp: React.FC = () => {
  const isMobile = getDevice().ios || getDevice().android;

  useEffect(() => {
    f7.popup.open("#welcome", false)
  }, []);

  return (
    <AuthProvider>
      <App {...appConfig}>
        <NavBar />
        <View main tab url="/" browserHistory browserHistorySeparator="" />

        <CustomModal
          title="Welcome!"
          id="welcome"
          onClose={() => f7.popup.close("#welcome", false)}
          isNavbar={isMobile}
        >
          Wilkommen!
        </CustomModal>
      </App>
    </AuthProvider>
  );
};

export default MyApp;
