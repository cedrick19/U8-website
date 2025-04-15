import { Block, Link } from 'framework7-react';
import { useState } from 'react';
import { cn } from '@/globals/utils';
import CoinActive from '@/assets/image/icons/coin-on.svg';
import CoinInactive from '@/assets/image/icons/coin-off.svg';
import { MobileNavItems } from './utils';

export const ToolMobile = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <>
      <Block className="absolute -bottom-9 z-10 flex h-24 w-full flex-row justify-between sm:h-40">
        <svg
          className="absolute left-0 z-0 h-full w-full shadow-secondary/30"
          viewBox="0 0 440 85"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M220 57.0004C239.882 57.0004 256 40.8827 256 21.0004C256 13.0706 262.105 3.94169 270 4.68079L436.118 20.2315C442.286 20.8089 447 25.9852 447 32.1793V71.0002C447 78.7322 440.732 85.0002 433 85.0002H7C-0.731989 85.0002 -7 78.7322 -7 71.0002V32.1793C-7 25.9852 -2.2856 20.8088 3.88154 20.2315L170 4.68079C177.895 3.94169 184 13.0706 184 21.0004C184 40.8827 200.118 57.0004 220 57.0004Z"
            fill="white"
            stroke="#4C2CCA"
            strokeOpacity="0.3"
            strokeWidth="0.7"
          />
        </svg>
        <Link
          className="absolute bottom-10 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-primary-gradient shadow-xl shadow-[#613EEA]/50 sm:h-28 sm:w-28 md:bottom-16"
          href="/recharge/"
          onClick={() => setActiveTab(5)}
        >
          <img src={activeTab === 5 ? CoinActive : CoinInactive} className="h-10 sm:h-20" />
        </Link>
        {MobileNavItems.map((item, ids) => (
          <Link
            key={ids}
            href={item.tabLink === 'home' ? '/' : `/${item.tabLink}/`}
            rippleColor="none"
            onClick={() => setActiveTab(ids)}
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
