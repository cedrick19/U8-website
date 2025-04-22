import { LoginScreen, Page } from 'framework7-react';
import { LoginSegment, LoginTab, RegisterTab } from './components';
import { SegmentButtons } from '../SegmentedTabs';
import Logo from '@/assets/image/svg/SVGAppLogo.svg';

const LoginArray: SegmentButtons[] = [
  {
    tabName: 'Login',
    tabLink: 'login',
    component: <LoginTab />,
  },
  {
    tabName: 'Register',
    tabLink: 'login',
    component: <RegisterTab />,
  },
];

export const LoginModal = () => {
  return (
    <LoginScreen id="loginHere">
      <Page>
        <img src={Logo} className="justify-self-center pb-20" width={192} />
        <LoginSegment tabArray={LoginArray} />
      </Page>
    </LoginScreen>
  );
};
