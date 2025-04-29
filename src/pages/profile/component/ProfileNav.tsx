import { cn } from '@/utils/helper';
import { Navbar, Link, f7, Icon, NavRight } from 'framework7-react';

interface ProfileNavigation {
  title: string;
  navRight?: React.ReactNode;
}

const ProfileNav = ({ title, navRight }: ProfileNavigation) => {
  return (
    <Navbar innerClassName="bg-white w-full relative">
      <Link aria-label="Go back" onClick={() => f7.views.main.router.back()}>
        <Icon material="chevron_left" size={35} className="text-gradient" />
      </Link>
      <p className={cn('text-gradient absolute w-[95%] text-center text-xl font-bold')}>{title}</p>
      {navRight && <NavRight className="gap-2 pr-2">{navRight}</NavRight>}
    </Navbar>
  );
};

export default ProfileNav;
