import { Block, Card } from 'framework7-react';
import { CardProps } from 'framework7-react/components/card.js';
import { ReactNode, useCallback, useState } from 'react';
import Refresh from '@/assets/image//svg/refresh.svg';
import { cn } from '@/utils/helper';

interface ProfileCardProps {
  className?: string;
  children?: ReactNode;
  pCardStyle?: CardProps;
  pCardTitle?: string | ReactNode;
  refresh?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className, children, pCardStyle, pCardTitle, refresh = false } = props;

  const [isSpinning, setIsSpinning] = useState(false);
  const handleRefreshClick = useCallback(() => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
  }, []);

  const renderDesign = () => {
    return (
      <div className="absolute top-0 h-[110px] w-full rounded-t-lg">
        <div className="relative h-full w-full">
          <div
            className="absolute left-0 top-0 h-full w-full rounded-tl-lg bg-[#D5CEF3]"
            style={{ clipPath: 'circle(34% at 5% 0)' }}
          />
          <div
            className="absolute left-0 top-0 h-full w-full rounded-tl-lg bg-[#B8ADE9]"
            style={{ clipPath: 'circle(24% at 5% 0)' }}
          />
          <div
            className="absolute left-0 top-0 h-full w-full rounded-tl-lg bg-[#A598E2]"
            style={{ clipPath: 'circle(16% at 5% 0)' }}
          />
        </div>
      </div>
    );
  };

  const renderRefreshHeader = () => {
    return (
      <div className="flex items-center gap-2">
        <img
          src={Refresh}
          alt="refresh"
          onClick={handleRefreshClick}
          className={cn(
            'h-5 w-5 cursor-pointer rounded-full bg-primary-gradient p-1 transition-transform duration-1000',
            isSpinning ? 'rotate-[1080deg]' : '',
          )}
        />
        <p className="font-extrabold">Refresh</p>
      </div>
    );
  };
  return (
    <Card
      className={cn(
        'relative min-h-[105px] border-2 border-white bg-[#ECE8F5] py-5 shadow-md shadow-[#d4caf9]',
        className,
      )}
      raised
      {...pCardStyle}
    >
      {renderDesign()}
      <Block className="z-10 flex w-full justify-between">
        {pCardTitle && <div className="font-extrabold">{pCardTitle}</div>}
        {refresh && renderRefreshHeader()}
      </Block>
      {children}
    </Card>
  );
};
