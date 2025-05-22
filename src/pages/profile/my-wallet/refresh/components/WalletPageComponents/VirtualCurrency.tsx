import { FC } from 'react';
import { Block, Button, Icon } from 'framework7-react';
import { VirtualCurrencyText } from '../utils';

interface VirtualCurrencyProps {
  onAddClick: () => void;
}

const VirtualCurrency: FC<VirtualCurrencyProps> = ({ onAddClick }) => {
  return (
    <Block className="flex items-center gap-6 rounded-3xl bg-white py-5">
      <Button className="h-12 w-12 rounded-2xl bg-primary-gradient" onClick={onAddClick}>
        <Icon f7="plus" icon="text-white" size={20} />
      </Button>
      <div>
        {VirtualCurrencyText.map(({ text, className }, index) => (
          <p key={index} className={className}>
            {text}
          </p>
        ))}
      </div>
    </Block>
  );
};

export default VirtualCurrency;
