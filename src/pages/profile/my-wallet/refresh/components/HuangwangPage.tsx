import { useState } from 'react';
import { Icon, Button, Block, Popup, List, ListItem, Page } from 'framework7-react';
import { balanceSummary, countryCodes } from './utils';
import CustomInput from '@/pages/profile/component/CustomInput';
import { cn } from '@/utils/helper';

type FormState = {
  popupOpened: boolean;
  selectedCode: string;
  phoneNumber: string;
  amount: string;
};

type CountryCode = {
  id: number;
  code: string;
  country: string;
};

export const HuangWangPage = () => {
  const [formState, setFormState] = useState<FormState>({
    popupOpened: false,
    selectedCode: '+63',
    phoneNumber: '',
    amount: '',
  });

  const handleSelect = (id: number) => {
    const selectedCountry = countryCodes.find((country: CountryCode) => country.id === id);
    if (selectedCountry) {
      setFormState((prevState) => ({
        ...prevState,
        selectedCode: selectedCountry.code,
        popupOpened: false,
      }));
    }
  };

  const handleClearInput = () => {
    setFormState((prevState) => ({
      ...prevState,
      phoneNumber: '',
    }));
  };

  const handleNumberFormat = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;
    const formatted = input.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    setFormState((prevState) => ({
      ...prevState,
      phoneNumber: formatted,
    }));
  };

  const handleAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      amount: e.currentTarget.value,
    }));
  };

  return (
    <>
      <Block className="flex flex-col rounded-3xl bg-white py-5">
        <div className="flex flex-row items-center gap-2">
          <h2 className="text-gradient text-base font-bold">Withdraw the HSBC account</h2>
          <Icon f7="question_circle_fill" className="text-gray-500" size={18} />
        </div>

        <div className="w-full">
          <CustomInput
            name="telephone"
            type="tel"
            value={formState.phoneNumber}
            onChange={handleNumberFormat}
            className={cn(
              'flex w-full flex-row items-center overflow-hidden rounded-full border-2 border-gray-500 bg-white px-3 pl-0 pr-3',
            )}
            leftDecoration={
              <Button
                id="country-code-button"
                className="text-base"
                onClick={() => setFormState((prevState) => ({ ...prevState, popupOpened: true }))}
              >
                <span className="text-black">{formState.selectedCode}</span>
                <Icon f7="chevron_down" className="text-xs font-bold text-black" />
              </Button>
            }
            rightDecoration={
              <Button className="h-7 w-7" onClick={handleClearInput}>
                <Icon f7="multiply_circle_fill" className="text-slate-500" />
              </Button>
            }
          />
        </div>

        <Popup
          opened={formState.popupOpened}
          onPopupClosed={() => setFormState((prevState) => ({ ...prevState, popupOpened: false }))}
          className="fixed !bottom-0 !top-auto mx-auto h-[50%] rounded-t-3xl"
        >
          <Page>
            <List>
              {countryCodes.map(({ id, code, country }: CountryCode) => (
                <ListItem
                  key={id}
                  title={`${country} (${code})`}
                  onClick={() => handleSelect(id)}
                />
              ))}
            </List>
          </Page>
        </Popup>

        <div className="flex flex-row items-start pt-2">
          <Icon f7="exclamationmark_triangle_fill" className="text-red-500" size={16} />
          <p className="text-sm text-red-500">
            Please carefully check the HSBC account. The wrong account funds will not be available.
          </p>
        </div>
      </Block>

      <Block className="flex flex-col items-start gap-4 rounded-3xl bg-white py-5">
        <p className="text-gradient text-lg font-bold">Cash withdrawal</p>
        <div className="w-full">
          <CustomInput
            name="amount"
            type="number"
            value={formState.amount}
            onChange={handleAmountChange}
            placeholder="Enter Amount"
            maxLength={12}
            className={cn('flex rounded-full border-2 border-gray-500 bg-white px-3 pl-0 pr-3')}
            leftDecoration={
              <div
                className={cn(
                  'h-8 w-8 items-center justify-center rounded-full bg-primary-gradient',
                )}
              >
                <Icon f7="money_dollar" className={cn('ml-0.5 mt-0.5 text-white')} />
              </div>
            }
            rightDecoration={
              <Button className={cn('h-8 w-1/4 rounded-full bg-primary-gradient')}>
                <span className={cn('normal-case text-white')}>MAX</span>
              </Button>
            }
          />
        </div>

        <div className="w-full rounded-lg bg-purple-50 p-3 text-sm">
          {balanceSummary.map(({ label, value }) => (
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
          <span className="text-gradient"> @U8hdkefu8 </span>
          Official grid customer service and let the customer service retain your aircraft number.
          The customer service will be checked twice to ensure the safety of fund.
        </p>
      </Block>

      <Button className="h-14 w-full rounded-lg bg-primary-gradient font-medium normal-case text-white">
        Immediately
      </Button>
    </>
  );
};
