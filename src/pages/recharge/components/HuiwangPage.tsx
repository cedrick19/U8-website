import { cn } from '@/globals/utils';
import { Block, Button, Icon, Input } from 'framework7-react';
import { useState } from 'react';

export const HuiwangPage = () => {
  const quickSelect = [100, 1000, 5000, 10000];
  const [amount, setAmount] = useState<number>(100);

  return (
    <>
      <Block className="flex flex-col items-start gap-6 rounded-3xl bg-white py-5">
        <div className="flex flex-col gap-2">
          <p>Recharge Methods</p>
          <div className="flex flex-row gap-2">
            <Button className="h-9 rounded-full bg-primary-gradient text-white">
              <Icon f7="money_dollar_circle_fill" icon="text-white" />
              <span>Huiwang Pay</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p>Recharge Currency</p>
          <div className="flex flex-row gap-2">
            <Button className="h-9 rounded-full bg-primary-gradient text-white">
              <Icon f7="money_dollar_circle_fill" icon="text-white" />
              <span>USDT</span>
            </Button>
          </div>
        </div>

        <div className="flex h-16 w-full flex-row py-2">
          <Input
            type="number"
            className="flex w-full flex-row items-center justify-between overflow-hidden truncate whitespace-nowrap rounded-full border border-gray-500 bg-white px-3"
            placeholder="Please enter the amount"
            min={0}
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <p>Quick Selection Amount</p>
          <div className="flex flex-row justify-between gap-2">
            {quickSelect.map((amt, ids) => (
              <Button
                key={ids}
                className={cn(
                  'h-9 w-20 rounded-full border text-black',
                  amount === amt
                    ? 'border-transparent bg-primary-gradient text-white'
                    : 'border-gray-500',
                )}
                onClick={() => setAmount(amt)}
              >
                <span>{amt}</span>
              </Button>
            ))}
          </div>
        </div>
      </Block>

      <Button className="h-9 w-full rounded-full bg-primary-gradient py-2 text-white">
        Submit an order
      </Button>
    </>
  );
};
