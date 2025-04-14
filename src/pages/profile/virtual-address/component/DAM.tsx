import { Block, Button, f7, Icon } from 'framework7-react';

const DAM = () => {
  return (
    <Block>
      <p>
        <span className="text-red-500">*</span>Only 5 DAM wallet addresses can be bound
      </p>

      <Block className="p-0">
        <Button
          id="dam-button"
          className="rounded-2xl bg-primary-gradient"
          large
          color="white"
          onClick={() => {
            document.getElementById('dam-button')?.blur();
            f7.view.main.router.navigate('dam/');
          }}
        >
          <Icon material="add" />
          Add a new DAM wallet address
        </Button>
      </Block>
    </Block>
  );
};

export default DAM;
