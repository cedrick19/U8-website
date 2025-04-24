import { Block, f7, Link } from 'framework7-react';
import { useEffect, useState } from 'react';
import { cn } from '@/globals/utils';
import CoinActive from '@/assets/image/icons/coin-on.svg';
import CoinInactive from '@/assets/image/icons/coin-off.svg';
import { MobileNavItems } from './utils';
import { useAuth } from '@/hooks/useAuth';
import { ToolMobileSvg } from './ToolMobileSvg';

export const ToolMobile = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { isLoggedIn } = useAuth();

  const handleNav = (ids: number) => {
    if (!isLoggedIn) {
      f7.loginScreen.open('#loginHere');
      setActiveTab(ids);
    } else {
      setActiveTab(ids);
    }
  };

  useEffect(() => {
    const currentPath = f7?.views?.main?.router?.currentRoute?.path || '/';
    const cleanedPath = currentPath.replace(/^\/|\/$/g, '');
    const index = MobileNavItems.findIndex(
      (item) => item.tabLink === cleanedPath || (cleanedPath === '' && item.tabLink === 'home'),
    );

    if (index >= 0) setActiveTab(index);
    if (cleanedPath === 'recharge') setActiveTab(5);
  }, []);

  return (
    <>
      <Block className="absolute -bottom-9 z-10 flex h-24 w-full flex-row justify-between sm:h-40">
        <ToolMobileSvg />
        <Link
          className="absolute bottom-10 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-primary-gradient shadow-xl shadow-[#613EEA]/50 sm:h-28 sm:w-28 md:bottom-16"
          href="/recharge/"
          onClick={() => handleNav(5)}
        >
          <img src={activeTab === 5 ? CoinActive : CoinInactive} className="h-10 sm:h-20" />
        </Link>
        {MobileNavItems.map((item, ids) => (
          <Link
            key={ids}
            href={item.tabLink === 'home' ? '/' : `/${item.tabLink}/`}
            rippleColor="none"
            onClick={() => handleNav(ids)}
            className={cn('flex flex-col pt-2', ids % 2 === 0 ? 'pl-6' : 'pr-6')}
          >
            <img
              src={activeTab === ids ? item.icons.iconOn : item.icons.iconOff}
              className="h-6 sm:h-8 md:h-10"
            />
            <span
              className={cn(
                'text-sm sm:text-2xl',
                activeTab === ids ? 'text-gradient' : 'text-inactive',
              )}
            >
              {item.text}
            </span>
          </Link>
        ))}
      </Block>
    </>
  );
};

export default ToolMobile;
