import { Block, Button, Icon } from 'framework7-react';
import { CustomInput } from '@/pages/profile/component';

import { cn } from '@/utils/helper';
import { walletTexts, balanceSummary } from '../utils';

const CashWithdrawal: React.FC = () => {
  const renderCashLeft = () => (
    <div
      className={cn('flex h-8 w-8 items-center justify-center rounded-full bg-primary-gradient')}
    >
      <Icon f7="money_dollar" className="text-white" />
    </div>
  );

  const renderMaxRight = () => (
    <Button className="h-8 w-1/4 rounded-full bg-primary-gradient normal-case text-white">
      {walletTexts.maxButtonLabel}
    </Button>
  );

  return (
    <>
      <Block className="space-y-3 rounded-3xl bg-white py-5">
        <p className="text-gradient text-lg font-bold">Cash withdrawal</p>

        <CustomInput
          name="amount"
          type="number"
          placeholder="Enter Amount"
          maxLength={12}
          className={cn('rounded-full border-2 border-gray-500 bg-white px-3 pl-0 pr-3')}
          leftDecoration={renderCashLeft()}
          rightDecoration={renderMaxRight()}
        />

        <div className="w-full rounded-lg bg-purple-50 p-3 text-sm">
          {balanceSummary.map(({ label, value }) => (
            <div key={label} className="flex flex-row justify-between">
              <span className="text-gradient flex items-center font-semibold">
                {label}
                {label === 'Frozen Amount' && (
                  <Icon
                    f7="question_circle_fill"
                    size={16}
                    className="ml-1 text-[16px] text-gray-500"
                  />
                )}
              </span>
              <span className="font-bold text-black">{value}</span>
            </div>
          ))}
        </div>

        <p className="font medium text-xs text-black">
          {walletTexts.contactInfo.message}
          <span className="text-gradient font-bold"> {walletTexts.contactInfo.handle}</span>
          {walletTexts.contactInfo.details}
        </p>
      </Block>

      <Button className="h-14 w-full rounded-lg bg-primary-gradient font-medium normal-case text-white">
        {walletTexts.submitButton}
      </Button>
    </>
  );
};

export default CashWithdrawal;
