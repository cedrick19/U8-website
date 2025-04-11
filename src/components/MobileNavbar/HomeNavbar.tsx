import { Navbar, NavLeft, NavRight } from 'framework7-react';
import Logo from '@/assets/image/logo.png';
import Telegram from '@/assets/image/Telegram.png';

type HomeNavbarProps = {
  navRight?: React.ReactNode;
};

const HomeNavbar = ({ navRight }: HomeNavbarProps) => {
  return (
    <Navbar innerClassName="bg-gradient-to-tr from-secondary/0 via-secondary/0 to-secondary/20">
      <NavLeft className="pl-3">
        <img src={Logo} alt="logo" className="h-5 w-20" />
        <img src={Telegram} alt="Telegram Logo" className="w-25 h-10" />
      </NavLeft>
      <NavRight className="gap-2 pr-2">{navRight}</NavRight>
    </Navbar>
  );
};

export default HomeNavbar;
