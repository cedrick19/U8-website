import { useState } from 'react';
import { Block, Button, Icon } from 'framework7-react';
import { CustomPopUp, CustomInput } from '@/pages/profile/component';
import { infoItems } from './utils';

export const WalletPage: React.FC<{ currencyWallet: string }> = ({ currencyWallet }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [amount, setAmount] = useState('');

  return (
    <>
      <Block className="flex flex-row items-center gap-6 rounded-3xl bg-white py-5">
        <Button
          className="h-12 w-12 items-center justify-center rounded-2xl bg-primary-gradient"
          onClick={() => setPopupOpen(true)}
        >
          <Icon f7="plus" icon="text-white" size={20} />
        </Button>

        <div>
          <p className="text-lg font-bold text-black">No virtual currency address</p>
          <p className="text-xs text-gray-600">Please add a virtual currency address.</p>
          <p className="text-sm text-gray-600">•••• •••• •••• ••••</p>
        </div>
      </Block>

      <Block className="flex flex-col items-start gap-4 rounded-3xl bg-white py-5">
        <p className="text-gradient text-lg font-bold">Cash withdrawal</p>

        <div className="w-full">
          <CustomInput
            name="amount"
            type="number"
            id={`${currencyWallet}-amount`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            maxLength={12}
            placeholder="Enter Amount"
            className="flex rounded-full border border-gray-500 bg-white px-3 pl-0 pr-3"
            leftDecoration={
              <div className="h-8 w-8 items-center justify-center rounded-full bg-primary-gradient">
                <Icon f7="money_dollar" className="ml-0.5 mt-0.5 text-white" />
              </div>
            }
            rightDecoration={
              <Button className="h-8 w-1/4 rounded-full bg-primary-gradient">
                <span className="normal-case text-white">MAX</span>
              </Button>
            }
          />
        </div>

        <div className="w-full rounded-lg bg-purple-50 p-3 text-sm">
          {infoItems.map(({ label, value }) => (
            <div key={label} className="flex flex-row justify-between">
              <span className="text-gradient flex items-center font-semibold">
                {label}
                {label === 'Frozen Amount' && (
                  <Icon
                    f7="question_circle_fill"
                    size={16}
                    className="material-icons ml-1 text-[16px] text-gray-500"
                  />
                )}
              </span>
              <span className="font-bold text-black">{value}</span>
            </div>
          ))}
        </div>

        <p className="font medium text-xs text-black">
          Contact for first presentation
          <span className="text-gradient font-bold"> @U8hdkefu8 </span>
          Official grid customer service and let the customer service retain your aircraft number.
          The customer service will be checked twice to ensure the safety of fund.
        </p>
      </Block>

      <Button className="h-14 w-full rounded-lg bg-primary-gradient font-medium normal-case text-white">
        Immediately
      </Button>

      <CustomPopUp
        title="Switch Collection Address"
        open={popupOpen}
        clAction={() => setPopupOpen(false)}
        opAction={() => {
          console.log('Add New Wallet Clicked');
          setPopupOpen(false);
        }}
      >
        <Block className="flex flex-col gap-2">
          <div className="items-center">
            <Icon f7="exclamationmark_triangle_fill" icon="text-red-500" size={16} />
            <span className="ml-1 text-sm text-red-600">
              Only 5 virtual coin wallets can be added
            </span>
          </div>

          <p className="text-lg font-semibold">0/5</p>

          <Button className="text-gradient h-12 border-2 border-secondary font-bold normal-case">
            Management
          </Button>

          <Button className="h-12 bg-primary-gradient text-center normal-case text-white">
            Add New Virtual Coin Wallet Address
          </Button>
        </Block>
      </CustomPopUp>
    </>
  );
};

export default WalletPage;
