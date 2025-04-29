import { cn } from '@/utils/helper';
import { Block, Button, Icon } from 'framework7-react';
import { useState } from 'react';
import { paymentDetails, usdtWarmTips } from './utils';

interface USDTFormType {
  rechargeMethod: 'U8 Payment' | 'CC Payment';
  networkProtocol: 'TRC20' | 'ERC20';
  rechargeCurrency: 'USDT';
}

type OptionProps<T extends string> = {
  label: T;
  selected: T;
  onClick: () => void;
  icon?: boolean;
};

const OptionButton = <T extends string>({
  label,
  selected,
  onClick,
  icon = false,
}: OptionProps<T>) => (
  <Button
    className={cn(
      'h-9 rounded-full',
      selected === label
        ? 'bg-primary-gradient text-white'
        : 'text-gradient border border-secondary',
    )}
    onClick={onClick}
  >
    {icon && (
      <Icon
        f7={selected === label ? 'money_dollar_circle_fill' : 'money_dollar_circle'}
        icon={cn(selected !== label && 'text-gradient')}
      />
    )}
    <span className="normal-case">{label}</span>
  </Button>
);

export const USDTPage = () => {
  const initialValues: USDTFormType = {
    rechargeMethod: 'U8 Payment',
    networkProtocol: 'TRC20',
    rechargeCurrency: 'USDT',
  };
  const [formValue, setFormValue] = useState<USDTFormType>(initialValues);
  const [copy, setCopy] = useState<boolean>(false);

  const comboKey = `${formValue.rechargeMethod}-${formValue.networkProtocol}`;
  const selectedImage = paymentDetails[comboKey]?.image;
  const selectedAddress = paymentDetails[comboKey]?.address;

  return (
    <>
      <Block className="flex flex-col items-start gap-6 rounded-3xl bg-white py-5">
        <div className="flex flex-col gap-2">
          <p>Recharge Methods</p>
          <div className="flex flex-row gap-2">
            {(['U8 Payment', 'CC Payment'] as const).map((method, ids) => (
              <OptionButton
                key={ids}
                label={method}
                selected={formValue.rechargeMethod}
                onClick={() => setFormValue({ ...formValue, rechargeMethod: method })}
                icon
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p>Network Protocol</p>
          <div className="flex flex-row gap-2">
            {(['TRC20', 'ERC20'] as const).map((network, ids) => (
              <OptionButton
                key={ids}
                label={network}
                selected={formValue.networkProtocol}
                onClick={() => setFormValue({ ...formValue, networkProtocol: network })}
              />
            ))}
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

        <p>Scan the QR Code or use the following address to complete the deposit</p>
        <div className="flex flex-row items-center gap-3">
          <img
            src={selectedImage}
            alt={comboKey}
            className="rounded-3xl border-8 border-[#EAE4F7]"
          />
          <p>
            Minimum recharge amount: <span className="text-green-400">10.00 USDT</span>
          </p>
        </div>
        <div className="flex w-full flex-row items-center rounded-full border border-gray-500 py-2">
          <p className="w-full overflow-hidden truncate whitespace-nowrap px-3">
            {selectedAddress}
          </p>
          <Button
            onClick={async () => {
              if (!selectedAddress) return;
              await navigator.clipboard.writeText(selectedAddress);
              setCopy(true);
              setTimeout(() => setCopy(false), 2000);
            }}
            className="bg-inherit"
          >
            <Icon f7={copy ? 'checkmark' : 'doc_on_clipboard'} icon="text-gray-800" size="medium" />
          </Button>
        </div>
      </Block>

      <Block className="flex flex-col items-start gap-6 rounded-3xl bg-white py-5">
        <div className="flex flex-row gap-1">
          <Icon material="lightbulb_full" icon="text-gradient" />
          <span className="text-gradient text-lg font-semibold">Warm tips</span>
        </div>
        <ul className="list-disc pl-4">
          {usdtWarmTips.map((tip, ids) => (
            <li key={ids}>{tip}</li>
          ))}
        </ul>
      </Block>
    </>
  );
};
