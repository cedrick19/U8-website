import { Router } from 'framework7/types';
import { Block, Page } from 'framework7-react';

import { HomeNavbar } from '@/components';
import { ActivityCardData } from './component';

export const ActivityDetails = ({ f7route }: { f7route: Router.Route }) => {
  const url = f7route.path;
  const extractCategory = url.split('/').filter(Boolean).pop();
  const category = extractCategory?.split('-').join(' ').toUpperCase();
  const renderCategory = url === '/activity/all-activity/' ? 'FISHING' : (category as string);

  return (
    <Page name="activty-details">
      <HomeNavbar />

      <Block className="mb-32">
        {[...Array(3)].map((_, index) => (
          <ActivityCardData key={index} category={renderCategory} />
        ))}
      </Block>
    </Page>
  );
};

export default ActivityDetails;
