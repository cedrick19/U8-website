import { useState } from 'react';
import { Block, Icon, Popup, Page, List, ListItem, Button } from 'framework7-react';
import { cn } from '@/utils/helper';
import { CustomInput } from '@/pages/profile/component';
import { FormState, CountryCode } from '../type';
import { countryCodes } from '../utils';

export const WithdrawAccount = () => {
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

  const handleNumberFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;
    const formatted = input.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    setFormState((prevState) => ({
      ...prevState,
      phoneNumber: formatted,
    }));
  };

  const renderHsbcRight = () => (
    <Button
      className="h-7 w-7"
      onClick={() =>
        setFormState((prevState) => ({
          ...prevState,
          phoneNumber: '',
        }))
      }
    >
      <Icon f7="multiply_circle_fill" className="text-slate-500" />
    </Button>
  );

  const rendernumberLeft = () => (
    <Button
      className="pr-0 text-base"
      onClick={() => setFormState({ ...formState, popupOpened: true })}
    >
      <span className="text-black">{formState.selectedCode}</span>
      <Icon f7="chevron_down" className="text-xs font-bold text-black" />
    </Button>
  );

  return (
    <Block className="space-y-3 rounded-3xl bg-white py-5">
      <div className="flex items-center gap-2">
        <h2 className="text-gradient text-base font-bold">Withdraw the HSBC account</h2>
        <Icon f7="question_circle_fill" className="text-gray-500" size={18} />
      </div>
      <CustomInput
        name="telephone"
        type="tel"
        value={formState.phoneNumber}
        onChange={handleNumberFormat}
        placeholder="Enter your mobile number"
        className={cn('rounded-full border-2 border-gray-500 bg-white px-3 pl-0 pr-3')}
        leftDecoration={rendernumberLeft()}
        rightDecoration={renderHsbcRight()}
      />

      <Popup
        opened={formState.popupOpened}
        onPopupClosed={() => setFormState((prevState) => ({ ...prevState, popupOpened: false }))}
        className="fixed !bottom-0 !top-auto mx-auto h-[50%] rounded-t-3xl"
      >
        <Page>
          <List>
            {countryCodes.map(({ id, code, country }: CountryCode) => (
              <ListItem key={id} title={`${country} (${code})`} onClick={() => handleSelect(id)} />
            ))}
          </List>
        </Page>
      </Popup>

      <div className="flex items-baseline gap-1 pt-2">
        <Icon f7="exclamationmark_triangle_fill" className="text-red-500" size={16} />
        <p className="text-sm text-red-500">
          Please carefully check the HSBC account. The wrong account funds will not be available.
        </p>
      </div>
    </Block>
  );
};
