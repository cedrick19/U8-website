import { Page } from 'framework7-react';
import { PageProps } from 'framework7-react/components/page.js';

export const ProfileContainer = (props: PageProps) => {
  const { children, ...rest } = props;
  return (
    <Page {...rest}>
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      {children}
    </Page>
  );
};
