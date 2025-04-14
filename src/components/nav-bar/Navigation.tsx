import { useState } from 'react';
import { Block, Button, f7, Icon, Link } from 'framework7-react';
import Telegram from '@/assets/image/icons/telegram_logo.png';
import { routes } from './utils';

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

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
              onClick={() => setActiveTab(ids)}
              animate={false}
            >
              <span
                className={
                  activeTab === ids ? 'text-gradient font-black' : 'font-semibold text-inactive'
                }
              >
                {route?.name?.toUpperCase()}
              </span>
            </Link>
          ))}
        </Block>
      </Block>

      <Link href="#" className="flex flex-col items-center no-underline" rippleColor="none">
        <Icon f7={'arrow_down_circle'} className="text-gradient text-xl" />
        <span className="text-xs text-gray-600">Download</span>
      </Link>

      <Link href="#" className="flex flex-col items-center no-underline" rippleColor="none">
        <Icon f7={'bell'} className="text-gradient text-xl" />
        <span className="text-xs text-gray-600">News</span>
      </Link>

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

export default NavBar;
