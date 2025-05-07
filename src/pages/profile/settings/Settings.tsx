import { useState } from 'react';
import { Block, Button } from 'framework7-react';

import { ProfileContainer, CustomPopUp, SettingItem } from '@/pages/profile/component';

import { MobileNavbar } from '@/components';
import ClearCache from '@/assets/image/profile/settings/clear_cache.svg';
import { f7navigate } from '@/utils/helper';
import { useAuth } from '@/hooks/useAuth';

const Settings = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [cacheOpen, setCacheOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <ProfileContainer name="Settings" className="relative">
      <MobileNavbar mode="profile" title="Settings" />
      <Block className="m-5 rounded-lg bg-white px-0 shadow-sm">
        <SettingItem
          id="settings-redirect"
          iconLeft="manage_accounts"
          label="Account Security"
          iconRight="chevron_right"
          iconRightClassName="text-gradient"
          onClick={() => f7navigate('settings-redirect', 'account-security/')}
        />
      </Block>
      <Block className="m-5 flex-col rounded-lg bg-white px-0 shadow-sm">
        <SettingItem
          iconLeft={<img src={ClearCache} alt="Clear Cache" />}
          label="Clear cache"
          iconRight="chevron_right"
          iconRightClassName="text-gradient"
          className="rounded-b-none"
          onClick={() => setCacheOpen(true)}
        />
        <div className="ml-4 mr-5 h-0 border-b-2 border-slate-100" />
        <SettingItem
          iconLeft="info"
          label="About"
          iconRightLabel="Version number 1.1.0"
          iconRightLabelClassName="text-[#808080] pr-1"
          rippleColor="none"
        />
      </Block>

      <Block>
        <Button className="bg-[#AB3030]" raised fill large onClick={() => setLoginOpen(true)}>
          Log out
        </Button>
      </Block>

      <CustomPopUp
        title="Log out"
        opText="Logout"
        clText="Cancel"
        clAction={() => setLoginOpen(false)}
        open={loginOpen}
        opAction={() => {
          setLoginOpen(false);
          logout();
        }}
      >
        <p className="m-auto w-36">Are you sure you want to logout?</p>
      </CustomPopUp>
      <CustomPopUp
        title="Clear Cache"
        opText="Clear cache"
        clText="Cancel"
        clAction={() => setCacheOpen(false)}
        open={cacheOpen}
      >
        <p className="m-auto w-36">Are you sure you want to clear cache?</p>
      </CustomPopUp>
    </ProfileContainer>
  );
};

export default Settings;
