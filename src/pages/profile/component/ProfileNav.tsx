import { cn } from '@/globals/utils';
import { Navbar, Link, f7, Icon, NavRight } from 'framework7-react';

interface ProfileNavigation {
  title?: string;
  image?: string;
  navRight?: React.ReactNode;
  imageClassName?: string;
}

const ProfileNav = ({ title, image, navRight, imageClassName }: ProfileNavigation) => {
  const handleGoBack = () => f7.views.main.router.back();

  return (
    <Navbar innerClassName={cn('bg-white w-full relative')}>
      <Link aria-label="Go back" onClick={handleGoBack}>
        <Icon material="chevron_left" size={35} className="text-gradient" />
      </Link>
      {image ? (
        <img
          src={image}
          alt="Profile"
          className={cn(
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform',
            imageClassName,
          )}
        />
      ) : (
        <p className={cn('text-gradient absolute w-[95%] text-center text-xl font-bold')}>
          {title}
        </p>
      )}
      {navRight && <NavRight className="gap-2 pr-2">{navRight}</NavRight>}
    </Navbar>
  );
};

export default ProfileNav;
