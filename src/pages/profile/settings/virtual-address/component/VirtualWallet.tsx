import { clickNavigate } from '@/utils/helper';
import { store } from '@/ts/store';
import { Block, Button, Icon } from 'framework7-react';

interface Wallet {
  wallet: {
    type: string;
    url: string;
  };
}

const VirtualWallet = (props: Wallet) => {
  const { dispatch } = store;
  const {
    wallet: { type, url },
  } = props;
  return (
    <Block>
      <p>
        <span className="text-red-500">*</span>Only 5 {type} wallet addresses can be bound
      </p>

      <Block className="p-0">
        <Button
          className="rounded-2xl bg-primary-gradient normal-case"
          large
          color="white"
          id={url}
          onClick={() => {
            dispatch('setParams', type);
            clickNavigate(url, url).onClick();
          }}
        >
          <Icon material="add" />
          Add a new {type} wallet address
        </Button>
      </Block>
    </Block>
  );
};

export default VirtualWallet;
