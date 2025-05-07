import { cn } from '@/utils/helper';
import { Segmented, Link } from 'framework7-react';
import CoinOn from '@/assets/image/icons/coin-on.svg';
import { useState } from 'react';

interface Wallet {
  type: string;
  url?: string;
}
interface WalletTab<Data> {
  tabs: Data;
  className?: string;
  coins?: boolean;
  params?: string;
}

export const WalletTabs = ({ tabs, className, coins = false, params }: WalletTab<Wallet[]>) => {
  const [active, setActive] = useState(params?.toLowerCase() ?? tabs[0].type.toLowerCase());
  const renderTabLabel = (label: string) => {
    return (
      <>
        {coins && (
          <img src={CoinOn} alt="coin" className={cn('h-6 w-6 rounded-full bg-primary-gradient')} />
        )}
        <span className={cn(active === label ? 'text-white' : 'text-gradient')}>
          {label.toUpperCase()}
        </span>
      </>
    );
  };

  return (
    <Segmented className="gap-4">
      {tabs.map(({ type }, index) => (
        <Link
          key={index}
          className={cn(
            'w-full gap-1 rounded-full py-3 text-lg',
            active === type.toLowerCase()
              ? 'bg-primary-gradient font-bold'
              : 'border-2 border-primary',
            className,
          )}
          onClick={() => {
            setActive(type.toLowerCase());
          }}
          tabLink={`#${type.toLowerCase()}`}
          rippleColor="none"
        >
          {renderTabLabel(type.toLowerCase())}
        </Link>
      ))}
    </Segmented>
  );
};
