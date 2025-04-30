import { Page, Block, Link, f7 } from 'framework7-react';

const NotFoundPage = () => (
  <Page name="not-found">
    <Block className="flex flex-col justify-center text-center">
      <span className="text-xl font-black">Woops!</span>
      <Link onClick={() => f7.views.main.router.back()}>
        <p className="text-gradient">Go back. NOOBS</p>
      </Link>
    </Block>
  </Page>
);

export default NotFoundPage;
