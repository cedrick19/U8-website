import { List, ListInput, Icon, Button, Block } from 'framework7-react';

export const HuangWangPage = () => {
  return (
    <>
      <Block className="my-3 rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-base font-bold text-purple-900">Withdraw the HSBC account</h2>
        <div className="flex flex-col gap-4">
          <List className="m-0">
            <ListInput
              placeholder="Enter your mobile number"
              inputStyle={{ paddingLeft: '80px' }}
              className="relative overflow-hidden rounded-full border border-gray-300"
            >
              <div
                slot="inner-start"
                className="absolute left-0 z-10 flex h-full items-center px-2"
              >
                <Button small className="bg-transparent text-sm text-black">
                  +855
                  <Icon f7="chevron_down" className="ml-1 text-xs text-gray-500" />
                </Button>
              </div>
            </ListInput>
          </List>

          <p className="px-2 text-sm text-red-500">
            Please carefully check the HSBC account, the wrong account funds will not be available.
          </p>
        </div>
      </Block>
      <Block className="my-3 rounded-3xl bg-white p-5 shadow-sm">
        <div>
          <h2 className="mb-4 text-lg font-medium text-purple-900">Cash withdrawal</h2>

          <div className="mb-4 flex items-center overflow-hidden rounded-full border border-gray-300">
            <div className="m-2 flex h-7 w-7 items-center justify-center rounded-full bg-purple-800 text-white">
              <span className="text-lg font-semibold">$</span>
            </div>
            <input
              type="text"
              placeholder="Enter amount"
              className="flex-1 px-3 py-3 text-gray-700 outline-none"
            />
            <Button className="m-2 h-[35px] w-20 rounded-full bg-purple-800 px-4 py-2 text-white">
              Max
            </Button>
          </div>

          <div className="mb-4 rounded-lg bg-purple-50 p-3 text-sm text-black">
            {[
              { label: 'Wallet Balance', value: '0.00' },
              { label: 'Handling Fee', value: '0.00' },
              { label: 'Expected', value: '0.00' },
              { label: 'Frozen Amount', value: '0.00' },
            ].map(({ label, value }) => (
              <div key={label} className="mb-1 flex justify-between">
                <span className="text-purple-900">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-600">
            Contact for first presentation @U8hdkefu8 Official grid customer service and let the
            customer service retain your aircraft number. The customer service will be checked twice
            to ensure the safety of fund.
          </p>
        </div>
      </Block>

      <Button className="h-10 w-full rounded-lg bg-purple-800 py-4 font-medium normal-case text-white">
        Immediately
      </Button>
    </>
  );
};
