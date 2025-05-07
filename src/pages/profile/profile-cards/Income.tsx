import { Fragment } from 'react';
import { Card, CardContent, Icon, Link } from 'framework7-react';

import { income } from '@/pages/profile/utils';

import { cn, f7navigate } from '@/utils/helper';
import { store } from '@/ts/store';

const Income = () => {
  const { dispatch } = store;
  const handleNavigate = (activeTab: number, index: number) => {
    dispatch('setGameActiveState', activeTab);
    f7navigate(`index-${index}`, 'game-management/');
  };
  return (
    <Card className="z-10 border-2 border-white bg-[#ECE8F5] shadow-md shadow-[#d4caf9]" raised>
      <CardContent className="flex items-end justify-center gap-5 py-10">
        {income.map(({ value, label, activeTab }, index) => (
          <Fragment key={index}>
            <Link
              className="!w-full flex-col"
              id={`index-${index}`}
              onClick={() => handleNavigate(activeTab, index)}
            >
              <div className="flex w-full items-center justify-center">
                <p className={cn('font-bold text-[#4A4A4A]', index === 0 && 'text-xl')}>
                  {value.toFixed(index === 0 ? 0 : 2)}
                </p>
                <Icon
                  material="chevron_right"
                  size={15}
                  className={cn(
                    'text-gradient !absolute',
                    index === 0 ? 'left-[60%]' : 'left-[72%]',
                  )}
                />
              </div>
              <p className="text-gradient text-center text-xs">{label}</p>
            </Link>
            {income.length - 1 !== index && <div className="h-16 border-[1px] border-slate-300" />}
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default Income;
