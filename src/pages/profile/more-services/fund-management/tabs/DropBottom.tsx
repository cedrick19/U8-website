import { cn } from '@/globals/utils';
import { Block, Button, Icon } from 'framework7-react';
import { Bottomsheet } from '../../component/Bottomsheet';

interface PopUpType {
  labelKey: string;
  popUpId: string;
  options: string[];
}

interface DropBottomProps {
  popUpConfig: PopUpType[];
  activeOption: Record<string, string>;
  setActiveOption: (value: Record<string, string>) => void;
  spanTwo?: string[];
}

export const DropBottom = ({
  popUpConfig,
  activeOption,
  setActiveOption,
  spanTwo = [],
}: DropBottomProps) => (
  <Block className="flex flex-row flex-wrap gap-2">
    {popUpConfig.map((popUpButton, ids) => (
      <Button
        key={ids}
        className="text-gradient h-9 max-w-full justify-between whitespace-nowrap rounded-full border border-secondary px-4 normal-case"
        rippleColor="none"
        popupOpen={`#${popUpButton.popUpId}`}
      >
        {activeOption[popUpButton.labelKey]}
        <Icon f7="chevron_down" icon="text-gradient" size={16} />
      </Button>
    ))}

    {popUpConfig.map(({ labelKey, popUpId, options }, ids) => (
      <Bottomsheet key={ids} id={popUpId}>
        <Block className="grid grid-cols-2 gap-2">
          {options.map((option, optionIds) => (
            <Button
              key={optionIds}
              className={cn(
                'rounded-full normal-case',
                spanTwo.includes(option) && 'col-span-2',
                activeOption[labelKey] === option
                  ? 'bg-primary-gradient text-white'
                  : 'text-gradient border border-secondary bg-[#ECE8F5]',
              )}
              onClick={() => setActiveOption({ ...activeOption, [labelKey]: option })}
            >
              {option}
            </Button>
          ))}
        </Block>
      </Bottomsheet>
    ))}
  </Block>
);
