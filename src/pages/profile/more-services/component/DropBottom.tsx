import { cn } from '@/globals/utils';
import { Block, Button, Icon } from 'framework7-react';
import { Bottomsheet } from '@/pages/profile/more-services/component';
import { CustomCalendar } from './Calendar';

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

const DropdownButton = ({ label, popupId }: { label: string; popupId: string }) => (
  <Button
    className="text-gradient h-9 max-w-full justify-between whitespace-nowrap rounded-full border border-secondary px-4 normal-case"
    rippleColor="none"
    popupOpen={`#${popupId}`}
  >
    {label}
    <Icon f7="chevron_down" icon="text-gradient" size={16} />
  </Button>
);

const DropdownSheet = ({
  options,
  selected,
  onSelect,
  spanTwo,
}: {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
  spanTwo: string[];
}) => (
  <Block className="grid grid-cols-2 gap-2">
    {options.map((option) => (
      <Button
        key={option}
        className={cn(
          'rounded-full normal-case',
          spanTwo.includes(option) && 'col-span-2',
          selected === option
            ? 'bg-primary-gradient text-white'
            : 'text-gradient border border-secondary',
        )}
        onClick={() => onSelect(option)}
      >
        {option}
      </Button>
    ))}
  </Block>
);

export const DropBottom = ({
  popUpConfig,
  activeOption,
  setActiveOption,
  spanTwo = [],
}: DropBottomProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 px-2 pt-5">
      {popUpConfig.map((popUpButton, ids) => (
        <DropdownButton
          key={ids}
          label={activeOption[popUpButton.labelKey]}
          popupId={popUpButton.popUpId}
        />
      ))}

      {popUpConfig.map(({ labelKey, popUpId, options }, ids) => (
        <Bottomsheet key={ids} id={popUpId}>
          {labelKey.toLowerCase().includes('date') && (
            <CustomCalendar controlValue={activeOption[labelKey]} />
          )}
          <DropdownSheet
            options={options}
            selected={activeOption[labelKey]}
            onSelect={(option) => setActiveOption({ ...activeOption, [labelKey]: option })}
            spanTwo={spanTwo}
          />
        </Bottomsheet>
      ))}
    </div>
  );
};
