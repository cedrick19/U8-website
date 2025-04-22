import { useAuth } from '@/hooks/useAuth';
import { Block, Button, Checkbox, f7 } from 'framework7-react';
import { useState } from 'react';
import Telegram from '@/assets/image/icons/telegram_logo.png';
import { LoginField } from './LoginField';
import { FieldData } from './utils';
import { LoginFieldType, RegisterFormData } from './type';

const renderHighlightedText = (text: string) => {
  const parts = text.split('\n');

  return parts.map((part, idx) => {
    if (idx % 2 === 1) {
      return (
        <span key={idx} className="text-sm text-sky-400">
          {part}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });
};

export const RegisterTab = () => {
  const [userData, setUserData] = useState<RegisterFormData>({
    username: '',
    password: '',
    confirmPassword: '',
    tgCred: '',
    inviteCode: '',
    agree: false,
  });
  const fieldList: LoginFieldType[] = FieldData(userData);

  const privacyPolicy = 'I have read and agreed with the \nRelated terms\n with \nPrivacy Policy\n';

  const { login } = useAuth();
  return (
    <Block className="flex flex-col gap-6">
      {fieldList.map((field, ids) => (
        <LoginField
          key={ids}
          inputHeader={field.inputHeader}
          f7icon={field.f7icon}
          inputType={field.inputType}
          placeholder={field.placeholder}
          value={field.value}
          setValue={(val) =>
            setUserData({ ...userData, [field.labelKey as keyof typeof userData]: val })
          }
        />
      ))}

      <Checkbox
        checked={userData.agree}
        className="flex w-full flex-row gap-2"
        onChange={(e) => setUserData({ ...userData, agree: e.target.checked })}
      >
        <span className="text-gradient">{renderHighlightedText(privacyPolicy)}</span>
      </Checkbox>

      <Button
        className="h-14 w-full rounded-2xl bg-primary-gradient py-4 normal-case text-white"
        onClick={() => {
          login();
          f7.loginScreen.close('#loginHere');
        }}
      >
        Register
      </Button>

      <div>
        <div className="flex w-full flex-row items-center justify-center gap-4 pb-5">
          <div className="h-[0.5px] w-[25%] rounded-full border border-gray-300" />
          <span className="text-center text-gray-500">Or quick Log in with</span>
          <div className="h-[0.5px] w-[25%] rounded-full border border-gray-300" />
        </div>
        <Button className="h-10 gap-2 justify-self-center border border-gray-500 p-2 normal-case text-gray-500">
          <img src={Telegram} className="h-full" />
          Telegram
        </Button>
      </div>
    </Block>
  );
};
