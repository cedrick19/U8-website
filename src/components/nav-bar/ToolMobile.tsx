import { Block, f7, f7ready, Link } from 'framework7-react';
import { Fragment, useEffect, useState } from 'react';
import { cn } from '@/utils/helper';
import CoinActive from '@/assets/image/icons/coin-on.svg';
import CoinInactive from '@/assets/image/icons/coin-off.svg';
import { useAuth } from '@/hooks/useAuth';
import SvgMobile from './SvgMobile';
import { MobileNavItems, toolBarUrl } from './utils';

export const ToolMobile = () => {
  const [activeUrl, setActiveUrl] = useState<string>('/');
  const { isLoggedIn } = useAuth();

  const handleNav = (url: string) => {
    if (!isLoggedIn) {
      f7.loginScreen.open('#loginHere');
      setActiveUrl(url);
    } else {
      setActiveUrl(url);
    }
  };

  useEffect(() => {
    f7ready(() => {
      f7.view.main.router.on('routeChange', (newRoute, previousRoute) => {
        const foobar = toolBarUrl.find((item) => item === newRoute.url);
        setActiveUrl(foobar !== undefined ? newRoute.url : previousRoute.url);
      });

      const currPath = f7.view.main.router.currentRoute?.url || '';
      const urlMatch = toolBarUrl.find((item) => item === currPath);
      setActiveUrl(urlMatch !== undefined ? currPath : '/');

      return () => {
        f7.view.main.router.off('routeChange', (newRoute, previousRoute) => {
          const foobar = toolBarUrl.find((item) => item === newRoute.url);
          setActiveUrl(foobar !== undefined ? newRoute.url : previousRoute.url);
        });
      };
    });
  }, []);

  return (
    <>
      <Block className="absolute -bottom-9 z-10 flex h-24 w-full flex-row justify-between px-5 sm:h-40">
        <SvgMobile />

        {MobileNavItems.map((item, ids) => {
          const tabUrl = item.tabLink === 'home' ? '/' : `/${item.tabLink}/`;
          return (
            <Fragment key={ids}>
              <Link
                key={ids}
                href={tabUrl}
                onClick={() => handleNav(tabUrl)}
                className={cn('flex flex-col pt-2', ids % 2 === 0 ? 'pl-4' : 'pr-4')}
              >
                <img
                  src={activeUrl === tabUrl ? item.icons.iconOn : item.icons.iconOff}
                  className="h-6 sm:h-8 md:h-10"
                />
                <span
                  className={cn(
                    'text-sm sm:text-2xl',
                    activeUrl === tabUrl ? 'text-gradient' : 'text-inactive',
                  )}
                >
                  {item.text}
                </span>
              </Link>
              {ids === 1 && (
                <Link
                  className="relative left-0.5 h-14 w-14 rounded-full bg-primary-gradient shadow-xl shadow-[#613EEA]/50 sm:h-28 sm:w-28 md:bottom-16"
                  href="/recharge/"
                  onClick={() => handleNav('/recharge/')}
                >
                  <img
                    src={activeUrl === '/recharge/' ? CoinActive : CoinInactive}
                    className="h-10 sm:h-20"
                  />
                </Link>
              )}
            </Fragment>
          );
        })}
      </Block>
    </>
  );
};

export default ToolMobile;
