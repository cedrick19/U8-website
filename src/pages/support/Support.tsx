import { Block, Page } from 'framework7-react';
import { NotifNav } from './components';
import SupportComponent from './components/SupportComponent';

const SupportPage = () => {
  return (
    <Page name="Support">
      <NotifNav title="24H Customer Service" />
      <Block>
        <SupportComponent />
      </Block>
    </Page>
  );
};

export default SupportPage;
