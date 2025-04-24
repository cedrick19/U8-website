import { useEffect, useRef } from 'react';
import { List, Button, Block, Input } from 'framework7-react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const balanceSummary = [
  { label: 'Wallet Balance', value: '0.00' },
  { label: 'Handling Fee', value: '0.00' },
  { label: 'Expected', value: '0.00' },
  { label: 'Frozen Amount', value: '0.00' },
];

export const HuangWangPage = () => {
  const telInputRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<ReturnType<typeof intlTelInput> | null>(null);

  useEffect(() => {
    if (telInputRef.current && !itiRef.current) {
      itiRef.current = intlTelInput(telInputRef.current, {
        initialCountry: 'PH',
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
      });
    }

    return () => {
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <Block className="my-3 rounded-3xl bg-white p-4 shadow-sm">
        <div className="flex space-x-2">
          <h2 className="text-base font-bold text-purple-900">Withdraw the HSBC account</h2>
          <span className="material-icons mr-1 mt-1 text-[18px] text-gray-500">help</span>
        </div>
        <div className="flex flex-col gap-3">
          <List className="m-0">
            <div className="flex items-center overflow-hidden rounded-full border border-gray-300 p-1 pl-3">
              <input
                ref={telInputRef}
                type="tel"
                placeholder="Enter your mobile number"
                className="flex-1 px-5 py-3 text-gray-700 outline-none"
              />
            </div>
          </List>
          <div className="flex items-start">
            <span className="material-icons relative -top-[1px] mr-1 text-[18px] text-red-500">
              warning
            </span>
            <p className="text-sm text-red-500">
              Please carefully check the HSBC account. The wrong account funds will not be
              available.
            </p>
          </div>
        </div>
      </Block>

      <Block className="my-3 rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-purple-900">Cash withdrawal</h2>

        <div className="mb-4 flex items-center overflow-hidden rounded-full border border-gray-300">
          <div className="m-2 flex h-7 w-7 items-center justify-center rounded-full bg-purple-900 text-white">
            <span className="f7-icons text-lg font-semibold">money_dollar</span>
          </div>
          <Input type="tel" placeholder="Enter amount" className="flex-1 px-3 py-3 text-gray-700" />
          <Button className="m-2 h-[35px] w-20 rounded-full bg-purple-900 px-4 py-2 text-white">
            Max
          </Button>
        </div>

        <div className="mb-4 rounded-lg bg-purple-50 p-3 text-sm text-black">
          {balanceSummary.map(({ label, value }) => (
            <div key={label} className="mb-1 flex items-center justify-between">
              <span className="flex items-center font-semibold text-purple-800">
                {label}
                {label === 'Frozen Amount' && (
                  <span className="material-icons ml-1 text-[16px] text-gray-500">help</span>
                )}
              </span>
              <span className="font-bold">{value}</span>
            </div>
          ))}
        </div>

        <p className="text-xs font-medium text-black">
          Contact for first presentation
          <span className="font-bold text-purple-900"> @U8hdkefu8 </span>
          Official grid customer service and let the customer service retain your aircraft number.
          The customer service will be checked twice to ensure the safety of fund.
        </p>
      </Block>

      <Button className="h-14 w-full rounded-lg bg-purple-900 py-4 font-medium normal-case text-white">
        Immediately
      </Button>
    </>
  );
};
