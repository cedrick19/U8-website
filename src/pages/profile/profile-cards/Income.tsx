import { store } from '@/ts/store';
import { f7navigate } from '@/utils/helper';
import { Card, CardContent, Link } from 'framework7-react';
import { Fragment } from 'react/jsx-runtime';
import { income } from '../utils';

const Income = () => {
  const { dispatch } = store;
  const handleNavigate = (activeTab: number, index: number) => {
    dispatch('setGameActiveState', activeTab);
    f7navigate(`index-${index}`, 'game-management/');
  };
  return (
    <Card className="z-10 border-2 border-white bg-[#ECE8F5] shadow-md shadow-[#d4caf9]" raised>
      <CardContent className="flex items-start justify-center gap-5 py-10">
        {income.map(({ value, label, activeTab }, index) => (
          <Fragment key={index}>
            <Link
              className="flex-col"
              id={`index-${index}`}
              onClick={() => handleNavigate(activeTab, index)}
            >
              <p className="text-center text-sm font-bold text-[#4A4A4A]">
                {value.toFixed(index === 0 ? 0 : 2)} <span>&gt;</span>
              </p>
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
