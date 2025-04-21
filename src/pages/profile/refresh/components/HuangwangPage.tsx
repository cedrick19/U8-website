import { List, Icon, Button, Block, Input } from 'framework7-react';
import Question from '@/assets/image/icons/question.svg';
import Warning from '@/assets/image/icons/warning.svg';
import { cn } from '@/globals/utils';

const balanceSummary = [
  { label: 'Wallet Balance', value: '0.00' },
  { label: 'Handling Fee', value: '0.00' },
  { label: 'Expected', value: '0.00' },
  { label: 'Frozen Amount', value: '0.00' },
];
export const HuangWangPage = () => {
  return (
    <>
      <Block className="my-3 rounded-3xl bg-white p-4 shadow-sm">
        <div className="flex space-x-2">
          <h2 className="text-base font-bold text-purple-900">Withdraw the HSBC account</h2>
          <img src={Question} alt="Help icon" />
        </div>
        <div className="flex flex-col gap-3">
          <List className="m-0">
            <div
              className={cn(
                'flex items-center overflow-hidden rounded-full border border-gray-300 p-1 pl-3',
              )}
            >
              <button className="m-3 flex h-4 w-4 items-center justify-center rounded-full">
                +63
                <Icon f7="chevron_down" className="text-xs text-black" />
              </button>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="flex-1 px-5 py-3 text-gray-700 outline-none"
              />
            </div>
          </List>

          <div className="flex items-start">
            <img src={Warning} alt="Warning" className="h-5 w-5" />
            <p className="px-2 text-sm text-red-500">
              Please carefully check the HSBC account. The wrong account funds will not be
              available.
            </p>
          </div>
        </div>
      </Block>
      <Block className="my-3 rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-purple-900">Cash withdrawal</h2>

        <div
          className={cn(
            'mb-4 flex items-center overflow-hidden rounded-full border border-gray-300',
          )}
        >
          <div className="m-2 flex h-7 w-7 items-center justify-center rounded-full bg-purple-900 text-white">
            <span className="text-lg font-semibold">$</span>
          </div>
          <Input type="tel" placeholder="Enter amount" className="flex-1 px-3 py-3 text-gray-700" />
          <Button
            className={cn('m-2 h-[35px] w-20 rounded-full bg-purple-900 px-4 py-2 text-white')}
          >
            Max
          </Button>
        </div>
        <div className="mb-4 rounded-lg bg-purple-50 p-3 text-sm text-black">
          {balanceSummary.map(({ label, value }) => (
            <div key={label} className="mb-1 flex items-center justify-between">
              <span className="text-purple-900label flex items-center font-semibold text-purple-800">
                {label}
                {label === 'Frozen Amount' && (
                  <img src={Question} alt="info" className="ml-1 h-4 w-4" />
                )}
              </span>
              <span className="font-bold">{value}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-600">
          Contact for first presentation @U8hdkefu8 Official grid customer service and let the
          customer service retain your aircraft number. The customer service will be checked twice
          to ensure the safety of fund.
        </p>
      </Block>
      <Button
        className={cn(
          'h-14 w-full rounded-lg bg-purple-900 py-4 font-medium normal-case text-white',
        )}
      >
        Immediately
      </Button>
    </>
  );
};
