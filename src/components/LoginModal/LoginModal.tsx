import { Block, LoginScreen, Page } from 'framework7-react';
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
      <Page>
        <img src={Logo} className="justify-self-center pb-20" width={192} />
        <Block>
          <LoginSegment tabArray={LoginArray} />
        </Block>
      </Page>
    </LoginScreen>
  );
};
