import { Navbar, Link, f7, Icon, NavRight, NavLeft } from 'framework7-react';

import { cn, f7navigate } from '@/utils/helper';

import Logo from '@/assets/image/icons/logo.png';
import Telegram from '@/assets/image/icons/Telegram.png';
import { getDevice } from 'framework7';

type NavbarMode = 'home' | 'profile' | 'notify';

interface MobileNavbarProps {
  title?: string;
  navRight?: React.ReactNode;
  mode: NavbarMode;
}

const handleBack = (): void => {
  f7.view.main.router.back();
};

export const MobileNavbar = ({ title, navRight, mode = 'home' }: MobileNavbarProps) => {
  const isMobile = getDevice().android || getDevice().ios;

  return (
    isMobile && (
      <Navbar
        innerClassName={cn(
          'bg-white w-full relative',
          mode === 'home' && 'bg-gradient-to-tr from-secondary/0 via-secondary/0 to-secondary/20',
        )}
      >
        <NavLeft>
          {mode === 'home' ? (
            <>
              <Link
                href="/"
                onClick={(e) => {
                  (e.currentTarget as HTMLAnchorElement).blur();
                }}
              >
                <img src={Logo} alt="logo" className="h-5 w-20" />
              </Link>
              <img src={Telegram} alt="Telegram Logo" className="w-25 h-10" />
            </>
          ) : (
            <Link onClick={handleBack}>
              <Icon material="chevron_left" size={35} className="text-gradient" />
              {mode === 'notify' && <p className="text-gradient text-lg font-extrabold">{title}</p>}
            </Link>
          )}
        </NavLeft>

        {mode === 'profile' && (
          <p className={cn('text-gradient absolute w-[95%] text-center text-xl font-bold')}>
            {title}
          </p>
        )}

        {mode !== 'notify' && <NavRight className="gap-2 pr-2">{navRight}</NavRight>}

        {mode === 'notify' && (
          <>
            <img
              src={Logo}
              alt="logo"
              className="text-gradient absolute left-1/2 h-5 -translate-x-1/2"
            />

            <NavRight>
              <p className="text-xl font-extrabold">0.00</p>
              <Link
                id="notifications"
                href="/notifications/"
                onClick={() => f7navigate('notifications', '/notifications/')}
                iconMaterial="notifications"
                iconSize={35}
                icon="text-gradient"
              />
            </NavRight>
          </>
        )}
      </Navbar>
    )
  );
};

export default MobileNavbar;
