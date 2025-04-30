import { getDevice } from 'framework7';
import { f7, Icon, Link, Navbar, NavLeft, NavRight } from 'framework7-react';

import Logo from '@/assets/image/icons/logo.png';

interface INavbarMobile {
  title: string;
}

export const NavbarWithNotify = ({ title }: INavbarMobile) => {
  const isMobile = getDevice().android || getDevice().ios;

  const handleBack = (): void => {
    f7.view.main.router.back();
  };

  return (
    isMobile && (
      <Navbar innerClassName="bg-white">
        <NavLeft>
          <Link onClick={handleBack}>
            <Icon material="chevron_left" size={35} className="text-gradient" />
            <p className="text-gradient text-lg font-extrabold">{title}</p>
          </Link>
        </NavLeft>

        <img
          src={Logo}
          alt="logo"
          className="text-gradient absolute left-1/2 h-5 -translate-x-1/2"
        />

        <NavRight>
          <p className="text-xl font-extrabold">0.00</p>
          <Icon material="notifications" size={35} className="text-gradient" />
        </NavRight>
      </Navbar>
    )
  );
};

export default NavbarWithNotify;
