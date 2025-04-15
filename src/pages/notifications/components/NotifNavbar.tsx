import { Link, f7, Icon, Navbar } from 'framework7-react';

interface NotifNavigation {
  title: string;
}

export const NotifNav = ({ title }: NotifNavigation) => {
  return (
    <Navbar innerClassName="relative" transparent>
      <Link onClick={() => f7.views.main.router.back()}>
        <Icon material="chevron_left" size={35} className="text-gradient" />
      </Link>
      <p className="text-gradient absolute w-[95%] text-center text-xl font-bold">{title}</p>
    </Navbar>
  );
};
