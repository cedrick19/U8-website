import { Block, Page } from 'framework7-react';
import SettingItem from '@/pages/profile/component/SettingItem';
import { account, modPassPop, payPass } from './utils';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import { useState } from 'react';
import CustomPopUp from '@/pages/profile/component/CustomPopUp';
import CustomInput from '@/pages/profile/component/CustomInput';
import { f7navigate } from '@/utils/helper';
import PayPassword from '@/assets/image/profile/settings/accnum_and_sec/pay_pass.svg';
import VirtualAdd from '@/assets/image/profile/settings/accnum_and_sec/virtual_add.svg';

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
        className="shadow-inner"
        maxLength={12}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        rightDecoration="textLimit"
        autoComplete="laserbabe"
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
        {modPassPop.map((data, index) => (
          <Block key={index} className="space-y-1">
            <CustomInput
              type="password"
              className="shadow-inner"
              autoComplete={`${index}1@aBc`}
              {...data}
              rightDecoration="visibility"
            />
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
        {payPass.map((data, index) => (
          <Block key={index} className="space-y-1">
            <CustomInput
              type="password"
              className="shadow-inner"
              autoComplete={`${index}1@aBc`}
              {...data}
              rightDecoration="visibility"
            />
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
      iconLeft: <img alt="Payment" src={PayPassword} />,
      label: 'Pay password',
      iconRightLabel: 'Not set',
      iconRight: 'chevron_right',
      className: 'rounded-none',
      divider: true,
      onClick: () => setOpenPopUp({ ...openPopUp, payPass: true }),
    },
    {
      id: 'vam-redirect',
      iconLeft: <img alt="Virtual Address" src={VirtualAdd} />,
      label: 'Virtual address management',
      iconRight: 'chevron_right',
      className: 'rounded-none',
      divider: true,
      onClick: () => f7navigate('vam-redirect', 'vam/'),
    },
    {
      id: 'asv-redirect',
      iconLeft: 'security',
      label: 'Advanced security verification',
      iconRight: 'chevron_right',
      className: 'rounded-t-none',
      onClick: () => f7navigate('asv-redirect', 'asv/'),
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
