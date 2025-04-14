import { Block, Button, Icon } from 'framework7-react';
import React from 'react';

const USDT = () => {
  return (
    <Block>
      <p>
        <span className="text-red-500">*</span>Only 5 USDT wallet addresses can be bound
      </p>

      <Block className="p-0">
        <Button className="rounded-2xl bg-primary-gradient" large color="white">
          <Icon material="add" />
          Add a new USDT wallet address
        </Button>
      </Block>
    </Block>
  );
};

export default USDT;
