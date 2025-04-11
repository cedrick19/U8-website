import { getDevice } from 'framework7';
import { f7, Icon, Link, Navbar, NavLeft, NavRight } from 'framework7-react';

interface INavbarMobile {
  title: string;
}

export const NavBar = ({ title }: INavbarMobile) => {
  const isMobile = getDevice().android || getDevice().ios;

  return (
    isMobile && (
      <Navbar innerClassName="bg-white ">
        <NavLeft>
          <Link onClick={() => f7.view.main.router.back()}>
            <Icon material="chevron_left" size={35} className="text-gradient" />
          </Link>
        </NavLeft>

        <p className="text-gradient text-xl font-extrabold">{title}</p>

        <NavRight>
          <p className="text-xl font-extrabold">0.00</p>
          <Icon material="notifications" size={35} className="text-gradient" />
        </NavRight>
      </Navbar>
    )
  );
};

export default NavBar;
