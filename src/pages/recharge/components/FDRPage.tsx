import { Block, Button, Icon } from 'framework7-react';
import { useState } from 'react';
import { fdrRechargeOptions, fdrWarmTips } from './utils';

export const FDRPage = () => {
  const [copy, setCopy] = useState<boolean>(false);

  return (
    <>
      <Block className="flex flex-col items-start gap-6 rounded-3xl bg-white py-5">
        <p>Support the following recharge:</p>
        <div className="flex flex-row gap-5">
          {fdrRechargeOptions.map((option, ids) => (
            <Button key={ids} className="flex h-20 w-28 flex-col rounded-3xl bg-primary-gradient">
              <img src={option.fdrImage} />
              <p className="text-white">{option.fdrText}</p>
            </Button>
          ))}
        </div>
      </Block>

      <Block className="flex flex-col items-start gap-6 rounded-3xl bg-white py-5">
        <p>Financial Account Number:</p>
        <div className="flex h-8 w-full flex-row">
          <div className="flex w-full flex-row items-center justify-between overflow-hidden truncate whitespace-nowrap rounded-l-full border border-gray-500 bg-white px-3">
            <p>@U8Caiwu888</p>
            <>
              <Button
                className="bg-inherit"
                onClick={() => {
                  setCopy(true);
                  setTimeout(() => setCopy(false), 2000);
                }}
              >
                <Icon
                  f7={copy ? 'checkmark' : 'doc_on_clipboard'}
                  icon="text-gray-800"
                  size="medium"
                />
              </Button>
            </>
          </div>
          <Button className="h-8 w-2/3 rounded-r-full bg-primary-gradient">
            <span className="text-white">Financial Direct</span>
          </Button>
        </div>
      </Block>

      <Block className="flex flex-col items-start gap-6 rounded-3xl bg-white py-5">
        <div className="flex flex-row gap-1">
          <Icon material="lightbulb_full" icon="text-gradient" />
          <span className="text-gradient text-lg font-semibold">Warm tips</span>
        </div>
        <ul className="list-disc pl-4">
          {fdrWarmTips.map((tip, ids) => (
            <li key={ids}>{tip}</li>
          ))}
        </ul>
      </Block>
    </>
  );
};
