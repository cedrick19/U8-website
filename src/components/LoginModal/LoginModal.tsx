import { Block, Button, f7, Icon, LoginScreen, Navbar, NavLeft, Page } from 'framework7-react';
import { LoginSegment, LoginTab, RegisterTab } from './components';
import { SegmentButtons } from '../SegmentedTabs';
import Logo from '@/assets/image/svg/SVGAppLogo.svg';

const LoginArray: SegmentButtons[] = [
  {
    tabName: 'Login',
    component: <LoginTab />,
  },
  {
    tabName: 'Register',
    component: <RegisterTab />,
  },
];

export const LoginModal = () => {
  return (
    <LoginScreen id="loginHere">
      <Navbar transparent>
        <NavLeft>
          <Button onClick={() => f7.loginScreen.close('#loginHere')}>
            <Icon f7="chevron_left" size={20} className="text-gradient" />
          </Button>
        </NavLeft>
      </Navbar>
      <Page>
        <img src={Logo} className="justify-self-center" width={192} />
        <Block>
          <LoginSegment tabArray={LoginArray} />
        </Block>
      </Page>
    </LoginScreen>
  );
};

export default LoginModal;
