import { useState } from 'react';
import { Block, Button, Card, CardContent, Icon, Input } from 'framework7-react';
import { cn } from '@/globals/utils';
import CustomPopUp from '@/pages/profile/component/CustomPopUp';

const infoItems = [
  { label: 'Wallet Balance', value: '0.00' },
  { label: 'Handling Fee', value: '0.00' },
  { label: 'Expected', value: '0.00' },
  { label: 'Frozen Amount', value: '0.00' },
];

export const WalletPage = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <Card className={cn('mx-auto my-3 max-w-md rounded-xl bg-white shadow-md')}>
        <CardContent className={cn('flex items-center p-4')}>
          <div
            className={cn(
              'mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-gradient',
            )}
          >
            <i
              className={cn('material-icons text-[24px] text-white')}
              onClick={() => setPopupOpen(true)}
            >
              add
            </i>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-gray-900">No virtual currency address</h3>
            <p className="text-xs text-gray-600">Please add a virtual currency address</p>
            <p className="mt-1 text-sm text-gray-500">•••• •••• •••• ••••</p>
          </div>
        </CardContent>
      </Card>

      <Block className={cn('my-3 rounded-3xl bg-white p-5 shadow-sm')}>
        <h2 className="text-lg font-bold text-purple-900">Cash withdrawal</h2>

        <div
          className={cn(
            'mb-4 flex items-center overflow-hidden rounded-full border border-gray-300',
          )}
        >
          <div
            className={cn(
              'm-2 flex h-7 w-7 items-center justify-center rounded-full bg-purple-900 text-white',
            )}
          >
            <Icon f7="money_dollar" size={30} />
          </div>
          <Input
            type="text"
            placeholder="Enter amount"
            className={cn('flex-1 px-3 py-3 text-gray-700 outline-none')}
          />
          <Button
            className={cn('m-2 h-[35px] w-20 rounded-full bg-purple-900 px-4 py-2 text-white')}
          >
            Max
          </Button>
        </div>

        <div className={cn('mb-4 rounded-lg bg-purple-50 p-3 text-sm text-black')}>
          {infoItems.map(({ label, value }) => (
            <div key={label} className={cn('mb-1 flex justify-between')}>
              <span className={cn('flex items-center font-semibold text-purple-900')}>
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

      <Button
        className={cn(
          'h-14 w-full rounded-lg bg-purple-900 py-4 font-medium normal-case text-white',
        )}
      >
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
        <Block className="flex-col space-y-8">
          <div className="flex flex-col items-center space-y-2 text-center">
            <p className="text-sm text-red-600">
              <span className="material-icons relative -top-[-2px] mr-1 text-[18px] text-red-500">
                warning
              </span>
              <span className="ml-1">Only 5 virtual coin wallets can be added</span>
            </p>
            <p className="text-lg font-semibold">0/5</p>
          </div>
          <div className="space-y-5">
            <Button
              large
              outline
              className="text-gradient border-2 border-purple-800 font-bold normal-case"
            >
              Management
            </Button>
            <Button
              large
              className="w-full whitespace-normal break-words bg-purple-800 px-4 py-3 text-center text-[13px] font-medium normal-case leading-snug text-white"
            >
              Add New Virtual Coin Wallet Address
            </Button>
          </div>
        </Block>
      </CustomPopUp>
    </>
  );
};

export default WalletPage;
