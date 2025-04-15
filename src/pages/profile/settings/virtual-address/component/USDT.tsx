import { Block, Button, f7, Icon } from 'framework7-react';

const USDT = () => {
  return (
    <Block>
      <p>
        <span className="text-red-500">*</span>Only 5 USDT wallet addresses can be bound
      </p>

      <Block className="p-0">
        <Button
          id="usdt-button"
          className="rounded-2xl bg-primary-gradient"
          large
          color="white"
          onClick={() => {
            document.getElementById('usdt-button')?.blur();
            f7.view.main.router.navigate('usdt/');
          }}
        >
          <Icon material="add" />
          Add a new USDT wallet address
        </Button>
      </Block>
    </Block>
  );
};

export default USDT;
