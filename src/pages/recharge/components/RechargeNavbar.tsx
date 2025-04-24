import { f7, Icon, Link, Navbar } from 'framework7-react';
import Logo from '@/assets/image/svg/SVGAppLogo.svg';

export const RechargeNavbar = () => {
  return (
    <Navbar innerClassName="relative" transparent>
      <Link onClick={() => f7.views.main.router.back()}>
        <Icon material="chevron_left" size={35} className="text-gradient" />
      </Link>
      <img src={Logo} className="text-gradient absolute left-1/2 h-7 -translate-x-1/2 font-bold" />
    </Navbar>
  );
};
