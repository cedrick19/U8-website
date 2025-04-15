import { Navbar, Link, f7, Icon } from 'framework7-react';

interface ProfileNavigation {
  title: string;
}

const ProfileNav = ({ title }: ProfileNavigation) => {
  return (
    <Navbar innerClassName="bg-white w-full relative">
      <Link onClick={() => f7.views.main.router.back()}>
        <Icon material="chevron_left" size={35} className="text-gradient" />
      </Link>
      <p className="text-gradient absolute left-1/2 -translate-x-1/2 text-center text-xl font-bold">
        {title}
      </p>
    </Navbar>
  );
};

export default ProfileNav;
