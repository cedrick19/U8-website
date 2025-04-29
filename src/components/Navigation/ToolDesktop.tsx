import { useEffect, useState } from 'react';
import { Block, Button, f7, f7ready, Icon, Link } from 'framework7-react';
import Telegram from '@/assets/image/icons/telegram_logo.png';
import { useAuth } from '@/hooks/useAuth';
import { routes } from './utils';

export const ToolDesktop = () => {
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
      f7.view.main.router.on('routeChange', (newRoute, prevRoute) => {
        const foobar = routes.find((route) => route.path === newRoute.url);
        setActiveUrl(foobar !== undefined ? newRoute.url : prevRoute.url);
      });

      const currPath = f7.view.main.router.currentRoute?.url || '';
      const urlMatch = routes.find((route) => route.path === currPath);
      setActiveUrl(urlMatch !== undefined ? currPath : '/');

      return () => {
        f7.view.main.router.off('routeChange', (newRoute, previousRoute) => {
          const foobar = routes.find((route) => route.path === newRoute.url);
          setActiveUrl(foobar !== undefined ? newRoute.url : previousRoute.url);
        });
      };
    });
  }, []);

  return (
    <Block className="container mx-auto flex h-8 w-full items-center justify-between">
      <Block className="mr-4 flex w-1/5 shrink-0 items-center">
        <Link href="/" className="flex flex-col" rippleColor="none">
          <span className="text-gradient text-xl font-bold">U8.COM</span>
          <span className="text-xs font-light text-black">Chinese Gaming</span>
        </Link>
        <Link href="#" className="flex items-center text-blue-500 no-underline" rippleColor="none">
          <img src={Telegram} className="h-8" />
          <span className="ml-1 text-xs">@t.u2support</span>
        </Link>
      </Block>

      <Block className="flex w-3/5 justify-center">
        <Block className="flex space-x-6 text-xs">
          {routes?.map((route, ids) => (
            <Link
              key={ids}
              href={route.path}
              rippleColor="none"
              onClick={() => handleNav(route.path)}
              animate={false}
            >
              <span
                className={
                  activeUrl === route.path
                    ? 'text-gradient font-black'
                    : 'font-semibold text-inactive'
                }
              >
                {route?.name?.toUpperCase()}
              </span>
            </Link>
          ))}
        </Block>
      </Block>

      {['Download', 'News'].map((navItem, ids) => (
        <Link
          key={ids}
          href="#"
          className="flex flex-col items-center no-underline"
          rippleColor="none"
        >
          <Icon
            f7={navItem === 'Download' ? 'arrow_down_circle' : 'bell'}
            className="text-gradient text-xl"
          />
          <span className="text-xs text-gray-600">{navItem}</span>
        </Link>
      ))}

      <Button
        rippleColor="none"
        className="text-gradient"
        onClick={() => f7.loginScreen.open('#loginHere', false)}
      >
        Login
      </Button>
    </Block>
  );
};

export default ToolDesktop;
