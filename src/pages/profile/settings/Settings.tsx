import { Block, Button, f7, Page } from 'framework7-react';
import SettingItem from '@/pages/profile/component/SettingItem';
import { useState } from 'react';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import CustomPopUp from '@/pages/profile/component/CustomPopUp';

const Settings = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [cacheOpen, setCacheOpen] = useState(false);
  return (
    <Page name="Settings" className="relative">
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <ProfileNav title="Settings" />
      <Block className="m-5 rounded-lg bg-white px-0 shadow-sm">
        <SettingItem
          id={'settings-redirect'}
          iconLeft="manage_accounts"
          label="Account Security"
          iconRight="chevron_right"
          iconRightClassName="text-gradient"
          onClick={() => {
            document.getElementById('settings-redirect')?.blur();
            f7.view.main.router.navigate('account-security/');
          }}
        />
      </Block>
      <Block className="m-5 flex-col rounded-lg bg-white px-0 shadow-sm">
        <SettingItem
          iconLeft="inventory"
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
    </Page>
  );
};

export default Settings;
