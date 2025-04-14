import { Block, f7, Icon, Page } from 'framework7-react';
import SettingItem from '../component/SettingItem';
import { account, modPassPop, payPass } from './utils';
import ProfileNav from '../component/ProfileNav';
import { useState } from 'react';
import CustomPopUp from '../component/CustomPopUp';
import CustomInput from '../component/CustomInput';

const AccountSecurity = () => {
  const [openPopUp, setOpenPopUp] = useState({
    nickName: false,
    modPass: false,
    payPass: false,
  });

  const renderNickName = () => (
    <CustomPopUp
      title="Change Nickname"
      opText="Save"
      clText="Cancel"
      open={openPopUp.nickName}
      clAction={() => setOpenPopUp({ ...openPopUp, nickName: false })}
    >
      <CustomInput
        type="text"
        name="nickname"
        maxLength={12}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        rightDecoration="textLimit"
      />
    </CustomPopUp>
  );
  const renderModPass = () => (
    <CustomPopUp
      title="Modify Password"
      opText="Save"
      clText="Cancel"
      open={openPopUp.modPass}
      clAction={() => setOpenPopUp({ ...openPopUp, modPass: false })}
    >
      <form>
        {modPassPop.map(({ rightDecoration, ...data }, index) => (
          <Block key={index} className="space-y-1">
            <CustomInput {...data} rightDecoration={<Icon material={rightDecoration} />} />
          </Block>
        ))}
      </form>
    </CustomPopUp>
  );
  const renderPayPass = () => (
    <CustomPopUp
      title="Modify Pay Password"
      opText="Save"
      clText="Cancel"
      open={openPopUp.payPass}
      clAction={() => setOpenPopUp({ ...openPopUp, payPass: false })}
    >
      <form>
        {payPass.map(({ rightDecoration, ...data }, index) => (
          <Block key={index} className="space-y-1">
            <CustomInput {...data} rightDecoration={<Icon material={rightDecoration} />} />
          </Block>
        ))}
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
      onClick: () => setOpenPopUp({ ...openPopUp, modPass: true }),
    },
    {
      iconLeft: 'local_mall',
      label: 'Pay password',
      iconRightLabel: 'Not set',
      iconRight: 'chevron_right',
      className: 'rounded-none',
      divider: true,
      onClick: () => setOpenPopUp({ ...openPopUp, payPass: true }),
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
        f7.view.main.router.navigate('/profile/settings/account-security/vam/');
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
            onClick={index === 1 ? () => setOpenPopUp({ ...openPopUp, nickName: true }) : undefined}
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
