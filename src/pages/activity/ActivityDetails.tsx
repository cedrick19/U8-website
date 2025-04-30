import { Router } from 'framework7/types';
import { Block, Page } from 'framework7-react';

import { NavbarWithNotify } from '@/components';
import { ActivityCardData } from './component';

export const ActivityDetails = ({ f7route }: { f7route: Router.Route }) => {
  const url = f7route.path;
  const extractCategory = url.split('/').filter(Boolean).pop();
  const category = extractCategory?.split('-').join(' ');
  const renderCategory =
    url === '/activity/all-activity/' ? 'FISHING' : (category?.toUpperCase() as string);
  const renderCategoryTitle = url === '/activity/all-activity/' ? 'All' : (category as string);

  const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Page name="activty-details">
      <NavbarWithNotify title={capitalizeFirstLetter(renderCategoryTitle)} />

      <Block className="mb-32">
        {[...Array(3)].map((_, index) => (
          <ActivityCardData key={index} category={renderCategory} />
        ))}
      </Block>
    </Page>
  );
};

export default ActivityDetails;
