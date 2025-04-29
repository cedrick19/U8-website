import { Link, Navbar, NavLeft, NavRight } from 'framework7-react';
import Logo from '@/assets/image/icons/logo.png';
import Telegram from '@/assets/image/icons/Telegram.png';

type HomeNavbarProps = {
  navRight?: React.ReactNode;
};

export const HomeNavbar = ({ navRight }: HomeNavbarProps) => {
  return (
    <Navbar innerClassName="bg-gradient-to-tr from-secondary/0 via-secondary/0 to-secondary/20">
      <NavLeft className="pl-3">
        <Link
          href="/"
          onClick={(e) => {
            (e.currentTarget as HTMLAnchorElement).blur();
          }}
        >
          <img src={Logo} alt="logo" className="h-5 w-20" />
        </Link>
        <img src={Telegram} alt="Telegram Logo" className="w-25 h-10" />
      </NavLeft>
      {navRight && <NavRight className="gap-2 pr-2">{navRight}</NavRight>}
    </Navbar>
  );
};

export default HomeNavbar;
