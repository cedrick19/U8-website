import { CustomInput } from '@/pages/profile/component';
import { cn } from '@/utils/helper';
import { Block, Icon, Button } from 'framework7-react';
import { balanceSummary } from '../utils';

const CashWithdrawal: React.FC<{ tabName: string }> = ({ tabName }) => {
  const UpperCase = tabName.toUpperCase();
  const button = () => {
    console.log(UpperCase);
  };
  const renderMaxRight = () => (
    <Button className="h-8 w-1/4 rounded-full bg-primary-gradient normal-case text-white">
      MAX
    </Button>
  );
  return (
    <>
      <Block className="space-y-3 rounded-3xl bg-white py-5">
        <p className="text-gradient text-lg font-bold">Cash withdrawal</p>
        <CustomInput
          name="amount"
          type="number"
          id={`${tabName}-amount`}
          placeholder="Enter Amount"
          maxLength={12}
          className={cn('rounded-full border-2 border-gray-500 bg-white px-3 pl-0 pr-3')}
          leftDecoration={
            <Icon f7="money_dollar" className="rounded-full bg-primary-gradient text-white" />
          }
          rightDecoration={renderMaxRight()}
        />
        <div className="w-full rounded-lg bg-purple-50 p-3 text-sm">
          {balanceSummary.map(({ label, value, icon }) => (
            <div key={label} className="flex flex-row justify-between">
              <span className="text-gradient flex items-center font-semibold">
                {label}
                {icon && icon}
              </span>
              <span className="font-bold text-black">{value}</span>
            </div>
          ))}
        </div>
        <p className="font medium text-xs text-black">
          Contact for first presentation
          <span className="text-gradient font-bold"> @U8hdkefu8 </span> Official grid customer
          service and let the customer service retain your aircraft number. The customer service
          will be checked twice to ensure the safety of fund.{' '}
        </p>
      </Block>
      <Button
        onClick={() => button()}
        className="h-14 w-full rounded-lg bg-primary-gradient font-medium normal-case text-white"
      >
        Immediately
      </Button>
    </>
  );
};

export default CashWithdrawal;
