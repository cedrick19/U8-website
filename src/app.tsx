import { App, Page, View } from 'framework7-react';
import appRoutes from './ts/appRoutes';
import { getDevice } from 'framework7';
import { AuthProvider } from './components/AuthContext';
import { store } from './ts/store';
import { ToolDesktop, ToolMobile } from './components';

const appConfig = {
  name: 'u8',
  theme: 'auto',
  routes: appRoutes,
  store: store,
};

const MyApp: React.FC = () => {
  const isMobile = getDevice().android || getDevice().ios;

  const renderWeb = () => {
    return (
      <>
        <ToolDesktop />
        <View main tab url="/" browserHistory browserHistorySeparator="" />
      </>
    );
  };

  const renderMobile = () => {
    return (
      <>
        <View tab main url="/" browserHistory browserHistorySeparator="" animate={false}>
          <ToolMobile />
        </View>
      </>
    );
  };

  return (
    <AuthProvider>
      <App {...appConfig}>
        <Page pageContent={false}>{!isMobile ? renderWeb() : renderMobile()}</Page>
      </App>
    </AuthProvider>
  );
};

export default MyApp;
