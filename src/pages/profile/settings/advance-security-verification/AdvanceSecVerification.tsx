import { Block, Button, Icon, Page } from 'framework7-react';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import CustomInput from '@/pages/profile/component/CustomInput';
import CustomPopUp from '@/pages/profile/component/CustomPopUp';
import { useState } from 'react';
import GoogleAuth from '@/assets/image/profile/settings/adv_sec/google_authenticator.svg';

const AdvanceSecVerification = () => {
  const [open, setOpen] = useState({
    mail: false,
    google: false,
  });
  const renderMailPop = () => {
    return (
      <CustomPopUp
        title="Tied Mailbox"
        open={open.mail}
        clAction={() => setOpen({ ...open, mail: false })}
        opText="Save"
        clText="Cancel"
      >
        <Block className="space-y-8">
          <CustomInput
            className="shadow-inner"
            name="mailbox"
            label="Mailbox"
            placeholder="Enter your mailbox"
          />
          <CustomInput
            name="verificationCode"
            label="Verification Code"
            placeholder="Enter code"
            className="py-0 pr-0 shadow-inner"
            rightDecoration={
              <Button
                className="rounded-l-none rounded-r-xl bg-primary-gradient px-8"
                large
                color="white"
              >
                Send Code
              </Button>
            }
            autoComplete="9999"
          />
        </Block>
      </CustomPopUp>
    );
  };
  const renderGooglePop = () => {
    return (
      <CustomPopUp
        title="Google Authenticator"
        open={open.google}
        clAction={() => setOpen({ ...open, google: false })}
      >
        <Block className="flex-col space-y-8">
          <img src={GoogleAuth} alt="Authentication" className="bg mx-auto h-10 w-10" />
          <p>
            You can get the verification code from Google Verifier App without relying on the
            mailbox verification code. This method is still available event if your phone is offline
          </p>
          <div className="space-y-5">
            <Button large outline className="text-gradient border-2 border-primary normal-case">
              Download Google Authenticator
            </Button>
            <Button large className="bg-primary-gradient normal-case text-white">
              Enable Google Authenticator
            </Button>
          </div>
        </Block>
      </CustomPopUp>
    );
  };

  return (
    <Page name="advance security verification">
      <ProfileNav title="Advance Security Verification" />
      <div className="absolute h-[40%] w-full rounded-br-full bg-gradient-to-br from-[#381E7B]/20 via-transparent to-transparent backdrop:blur-3xl" />
      <Block className="flex-col space-y-5">
        <div className="space-y-2">
          <div className="space-x-2">
            <Icon material="verified_user" className="text-gradient" size={30} />
            <span className="text-gradient text-lg font-bold">Refill Verification</span>
          </div>

          <p className="flex gap-1 text-red-500">
            <span>
              <Icon material="warning" color="red" size={20} />
            </span>
            For your financial security, please conduct advanced security verification binding
          </p>
        </div>
        <div className="space-y-1">
          <div className="space-x-2">
            <Icon material="mail" className="text-gradient" size={30} />
            <span className="text-gradient text-lg font-bold">Mailbox</span>
          </div>
          <CustomInput
            label="Use mailboxes to protect your accounts and transactions."
            name="mailBind"
            value="Unbound"
            className="justify-between bg-white py-3 text-red-500 shadow-md"
            readOnly
            autoCapitalize="email bind"
            rightDecoration={
              <Button
                className="bg-primary-gradient px-8"
                color="white"
                onClick={() => setOpen({ ...open, mail: true })}
              >
                Binding
              </Button>
            }
          />
        </div>
        <div className="space-y-1">
          <div className="flex space-x-2">
            <img src={GoogleAuth} alt="Authentication" className="h-[30px] w-[30px]" />
            <span className="text-gradient text-lg font-bold">Google Verifier</span>
          </div>
          <CustomInput
            label="Use mailboxes to protect your accounts and transactions."
            name="googleAuth"
            value="Unactivated"
            className="justify-between bg-white py-3 text-red-500 shadow-md"
            readOnly
            autoCapitalize="google bind"
            rightDecoration={
              <Button
                className="bg-primary-gradient px-8"
                color="white"
                onClick={() => setOpen({ ...open, google: true })}
              >
                Binding
              </Button>
            }
          />
        </div>
      </Block>
      {renderMailPop()}
      {renderGooglePop()}
    </Page>
  );
};

export default AdvanceSecVerification;
