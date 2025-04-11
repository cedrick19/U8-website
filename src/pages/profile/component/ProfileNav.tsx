import { Navbar, NavLeft, Link, f7, Icon } from 'framework7-react';

interface ProfileNavigation {
  title: string;
}

const ProfileNav = ({ title }: ProfileNavigation) => {
  return (
    <Navbar innerClassName="bg-white relative">
      <NavLeft>
        <Link onClick={() => f7.views.main.router.back()}>
          <Icon material="chevron_left" size={35} className="text-primary-gradient" />
        </Link>
      </NavLeft>
      <p className="text-primary-gradient absolute w-full text-center text-xl font-bold">{title}</p>
    </Navbar>
  );
};

export default ProfileNav;
