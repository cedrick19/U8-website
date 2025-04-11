import { Block, f7, Icon, Page } from 'framework7-react';
import SettingItem from '../component/SettingItem';
import { account } from './utils';
import ProfileNav from '../component/ProfileNav';
import { useState } from 'react';
import CustomPopUp from '../component/CustomPopUp';

const AccountSecurity = () => {
  const [openNickName, setOpenNickName] = useState(false);
  const [openModPass, setOpenModPass] = useState(false);
  const [openPayPass, setOpenPayPass] = useState(false);

  const renderNickName = () => (
    <CustomPopUp
      title="Change Nickname"
      opText="Save"
      clText="Cancel"
      open={openNickName}
      clAction={() => setOpenNickName(false)}
    >
      <div className="mx-5 flex items-center rounded-xl bg-white p-1 px-5">
        <input
          type="text"
          className="h-10 w-full"
          name="nickname"
          maxLength={12}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <p className="text-[#808080]">{inputVal.length}/12</p>
      </div>
    </CustomPopUp>
  );
  const renderModPass = () => (
    <CustomPopUp
      title="Modify Password"
      opText="Save"
      clText="Cancel"
      open={openModPass}
      clAction={() => setOpenModPass(false)}
    >
      <form>
        <Block className="space-y-1">
          <p className="text-start">Current Password</p>
          <div className="flex items-center rounded-xl bg-white p-1 px-5">
            <input
              type="password"
              className="h-10 w-full placeholder-[#808080]"
              placeholder="Enter current password"
              name="nickname"
              maxLength={12}
              autoComplete="*****"
            />
            <Icon material="visibility_off" />
          </div>
        </Block>
        <Block className="space-y-1">
          <p className="text-start">New password</p>
          <div className="flex items-center rounded-xl bg-white p-1 px-5">
            <input
              type="password"
              className="h-10 w-full placeholder-[#808080]"
              placeholder="Enter new password"
              name="nickname"
              maxLength={12}
              autoComplete="*****"
            />
            <Icon material="visibility_off" />
          </div>
        </Block>
        <Block className="space-y-1">
          <p className="text-start">Confirm new password</p>
          <div className="flex items-center rounded-xl bg-white p-1 px-5">
            <input
              type="password"
              className="h-10 w-full placeholder-[#808080]"
              placeholder="Enter new password again"
              name="nickname"
              maxLength={12}
              autoComplete="*****"
            />
            <Icon material="visibility_off" />
          </div>
        </Block>
      </form>
    </CustomPopUp>
  );
  const renderPayPass = () => (
    <CustomPopUp
      title="Modify Pay Password"
      opText="Save"
      clText="Cancel"
      open={openPayPass}
      clAction={() => setOpenPayPass(false)}
    >
      <form>
        <Block className="space-y-1">
          <p className="text-start">Current Password</p>
          <div className="flex items-center rounded-xl bg-white p-1 px-5">
            <input
              type="password"
              className="h-10 w-full placeholder-[#808080]"
              placeholder="Enter password"
              name="nickname"
              maxLength={12}
              autoComplete="******"
            />
            <Icon material="visibility_off" />
          </div>
        </Block>
        <Block className="space-y-1">
          <p className="text-start">Current Password</p>
          <div className="flex items-center rounded-xl bg-white p-1 px-5">
            <input
              type="password"
              className="h-10 w-full placeholder-[#808080]"
              placeholder="Enter password again"
              name="nickname"
              maxLength={12}
              autoComplete="******"
            />
            <Icon material="visibility_off" />
          </div>
        </Block>
      </form>
    </CustomPopUp>
  );

  const [inputVal, setInputVal] = useState('beluga.cat');

  const security = [
    {
      iconLeft: 'lock',
      label: 'Log in password',
      iconRightLabel: 'modify',
      iconRight: 'chevron_right',
      className: 'rounded-b-none',
      divider: true,
      onClick: () => setOpenModPass(true),
    },
    {
      iconLeft: 'local_mall',
      label: 'Pay password',
      iconRightLabel: 'Not set',
      iconRight: 'chevron_right',
      className: 'rounded-none',
      divider: true,
      onClick: () => setOpenPayPass(true),
    },
    {
      id: 'vam-redirect',
      iconLeft: 'book',
      label: 'Virtual address management',
      iconRight: 'chevron_right',
      className: 'rounded-none',
      divider: true,
      onClick: () => {
        document.getElementById('vam-redirect')?.blur();
        f7.view.main.router.navigate('/profile/settings/virtual-address');
      },
    },
    {
      id: 'asv-redirect',
      iconLeft: 'security',
      label: 'Advanced security verification',
      iconRight: 'chevron_right',
      className: 'rounded-t-none',
      onClick: () => {
        document.getElementById('asv-redirect')?.blur();
        f7.view.main.router.navigate('/profile/settings/advance-security');
      },
    },
  ];
  return (
    <Page name="account-security">
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <ProfileNav title="Account Security" />
      <Block className="m-5 flex-col rounded-lg bg-white px-0 shadow-sm">
        {account.map((data, index) => (
          <SettingItem
            key={index}
            {...data}
            iconRightClassName="text-[#808080] pr-1"
            iconRightLabelClassName="text-[#808080]"
            onClick={index === 1 ? () => setOpenNickName(true) : undefined}
          />
        ))}
      </Block>
      <Block className="m-5 flex-col rounded-lg bg-white px-0 shadow-sm">
        {security.map((data, index) => (
          <SettingItem
            key={index}
            {...data}
            iconRightClassName="text-gradient pr-1"
            iconRightLabelClassName={index === 1 ? 'text-red-700' : 'text-[#808080]'}
          />
        ))}
      </Block>
      {renderNickName()}
      {renderModPass()}
      {renderPayPass()}
    </Page>
  );
};

export default AccountSecurity;
