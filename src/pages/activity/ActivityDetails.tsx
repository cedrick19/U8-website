import { HomeNavbar } from '@/components';
import { Page } from 'framework7-react';
import { Router } from 'framework7/types';

import { ActivityCardData } from './component';

export const ActivityDetails = ({ f7route }: { f7route: Router.Route }) => {
  const url = f7route.url;

  console.log(url);

  return (
    <Page name="activty-details">
      <HomeNavbar />
      {url}
      <ActivityCardData />
    </Page>
  );
};

export default ActivityDetails;
