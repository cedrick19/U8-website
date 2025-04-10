import { Block, Button, f7, Icon, Link, Navbar, NavLeft, Page, Popup } from 'framework7-react';
import SettingItem from '../component/SettingItem';
import { useState } from 'react';

interface PopupProps {
  title: string;
  label: string;
  opText: string;
  clText: string;
  opAction?: () => void;
  clAction?: () => void;
  open: boolean;
}
const CustomPopUp = (props: PopupProps) => {
  const { title, label, opText, opAction, clAction, clText, open } = props;

  return (
    <Popup
      className="absolute inset-0 m-auto h-fit w-[90%] rounded-3xl bg-[#D1D1D1]"
      opened={open}
      animate={false}
      onPopupClose={clAction}
    >
      <Block className="space-y-5 text-center">
        <p className="text-2xl font-bold">{title}</p>
        <p className="m-auto w-36">{label}</p>
      </Block>
      <div className="m-0 flex items-end justify-center border-t-[1.5px] border-black">
        <Button
          onClick={opAction}
          className="w-full rounded-none border-r-[1.5px] border-black py-10 text-xl text-red-700"
          large
        >
          {opText}
        </Button>
        <Button onClick={clAction} className="w-full rounded-none py-10 text-xl text-black" large>
          {clText}
        </Button>
      </div>
    </Popup>
  );
};

const Settings = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [cacheOpen, setCacheOpen] = useState(false);
  return (
    <Page name="Settings" className="relative">
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <Navbar innerClassName="bg-white relative">
        <NavLeft>
          <Link onClick={() => f7.views.main.router.back()}>
            <Icon material="chevron_left" size={35} className="text-primary-gradient" />
          </Link>
        </NavLeft>
        <p className="absolute w-full text-center text-xl font-bold text-primary-gradient">
          Settings
        </p>
      </Navbar>
      <Block className="m-5 rounded-lg bg-white px-0">
        <SettingItem
          iconLeft="manage_accounts"
          label="Account Security"
          iconRight="chevron_right"
        />
      </Block>
      <Block className="m-5 flex-col rounded-lg bg-white px-0 shadow-sm">
        <SettingItem
          iconLeft="manage_accounts"
          label="Clear cache"
          iconRight="chevron_right"
          className="rounded-b-none"
          onClick={() => setCacheOpen(true)}
        />
        <div className="ml-4 mr-5 h-0 border-b-2 border-slate-100" />
        <SettingItem
          iconLeft="info"
          label="About"
          iconRightLabel="Version number 1.1.0"
          iconRightClassName="text-[#808080] pr-1"
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
        label="Are you sure you want to logout?"
        opText="Logout"
        clText="Cancel"
        clAction={() => setLoginOpen(false)}
        open={loginOpen}
      />
      <CustomPopUp
        title="Clear Cache"
        label="Are you sure you want to clear cache?"
        opText="Clear cache"
        clText="Cancel"
        clAction={() => setCacheOpen(false)}
        open={cacheOpen}
      />
    </Page>
  );
};

export default Settings;
