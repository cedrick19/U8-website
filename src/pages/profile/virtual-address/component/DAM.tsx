import { Block, Button, Icon } from 'framework7-react';

const DAM = () => {
  return (
    <Block>
      <p>
        <span className="text-red-500">*</span>Only 5 DAM wallet addresses can be bound
      </p>

      <Block className="p-0">
        <Button className="rounded-2xl bg-primary-gradient" large color="white">
          <Icon material="add" />
          Add a new DAM wallet address
        </Button>
      </Block>
    </Block>
  );
};

export default DAM;
