import { useState } from 'react';
import { Icon, Button, Block, Input, Sheet, List, ListItem } from 'framework7-react';
import { balanceSummary } from './utils';

export const HuangWangPage = () => {
  const [sheetOpened, setSheetOpened] = useState(false);
  const [selectedCode, setSelectedCode] = useState('+63');

  const countryCodes = [
    { id: 1, name: 'Philippines', code: '+63' },
    { id: 2, name: 'United States', code: '+1' },
    { id: 3, name: 'United Kingdom', code: '+44' },
    { id: 4, name: 'China', code: '+86' },
    { id: 5, name: 'Japan', code: '+81' },
  ];

  const handleCodeSelect = (id: number) => {
    const selected = countryCodes.find((c) => c.id === id);
    if (selected) {
      setSelectedCode(selected.code);
      setSheetOpened(false);
    }
  };

  return (
    <>
      <Block className="flex flex-col items-start gap-6 rounded-3xl bg-white py-5">
        <div className="flex flex-row items-center gap-2">
          <h2 className="text-gradient text-base font-bold">Withdraw the HSBC account</h2>
          <Icon f7="question_circle_fill" className="text-gray-500" size={18} />
        </div>

        <div className="flex h-12 w-full flex-row">
          <div className="flex w-full flex-row items-center justify-between overflow-hidden truncate whitespace-nowrap rounded-full border border-gray-500 bg-white px-3">
            <Button className="flex items-center rounded-full" onClick={() => setSheetOpened(true)}>
              <span className="text-black">{selectedCode}</span>
              <Icon f7="chevron_down" className="ml-1 text-xs text-black" />
            </Button>
            <Input type="number" className="w-full" min={0} id="phoneNumber" name="phoneNumber" />
          </div>
        </div>

        <div className="flex flex-row items-start">
          <Icon f7="exclamationmark_triangle_fill" className="text-red-500" size={16} />
          <p className="text-sm text-red-500">
            Please carefully check the HSBC account. The wrong account funds will not be available.
          </p>
        </div>
      </Block>

      <Block className="flex flex-col items-start gap-4 rounded-3xl bg-white py-5">
        <p className="text-gradient text-lg font-bold">Cash withdrawal</p>

        <div className="flex h-12 w-full flex-row">
          <div className="flex w-full flex-row items-center justify-between overflow-hidden truncate whitespace-nowrap rounded-full border border-gray-500 bg-white px-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-gradient">
              <Icon f7="money_dollar" className="text-white" />
            </div>
            <Input
              type="number"
              className="w-2/4"
              min={0}
              id="withdrawalAmount"
              name="withdrawalAmount"
            />
            <Button className="h-8 w-1/4 rounded-full bg-primary-gradient">
              <span className="normal-case text-white">MAX</span>
            </Button>
          </div>
        </div>

        <div className="w-full rounded-lg bg-purple-50 p-3 text-sm">
          {balanceSummary.map(({ label, value }) => (
            <div key={label} className="flex flex-row justify-between">
              <span className="text-gradient flex items-center font-semibold">
                {label}
                {label === 'Frozen Amount' && (
                  <span className="material-icons ml-1 text-[16px] text-gray-500">help</span>
                )}
              </span>
              <span className="font-bold text-black">{value}</span>
            </div>
          ))}
        </div>

        <p className="text-xs font-medium text-black">
          Contact for first presentation
          <span className="text-gradient"> @U8hdkefu8 </span>
          Official grid customer service and let the customer service retain your aircraft number.
          The customer service will be checked twice to ensure the safety of fund.
        </p>
      </Block>

      <Button className="h-14 w-full rounded-lg bg-primary-gradient font-medium normal-case text-white">
        Immediately
      </Button>

      <Sheet opened={sheetOpened} onSheetClosed={() => setSheetOpened(false)} swipeToClose backdrop>
        <List>
          {countryCodes.map(({ id, name, code }) => (
            <ListItem key={id} title={`${name} (${code})`} onClick={() => handleCodeSelect(id)} />
          ))}
        </List>
      </Sheet>
    </>
  );
};
