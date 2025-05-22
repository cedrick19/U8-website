import { FC } from 'react';
import { Block, Button, Icon } from 'framework7-react';

interface VirtualCurrencyProps {
  onAddClick: () => void;
}

const VirtualCurrency: FC<VirtualCurrencyProps> = ({ onAddClick }) => {
  return (
    <Block className="flex flex-row items-center gap-6 rounded-3xl bg-white py-5">
      <Button
        className="h-12 w-12 items-center justify-center rounded-2xl bg-primary-gradient"
        onClick={onAddClick}
      >
        <Icon f7="plus" icon="text-white" size={20} />
      </Button>

      <div>
        <p className="text-lg font-bold text-black">No virtual currency address</p>
        <p className="text-xs text-gray-600">Please add a virtual currency address.</p>
        <p className="text-sm text-gray-600">•••• •••• •••• ••••</p>
      </div>
    </Block>
  );
};

export default VirtualCurrency;
