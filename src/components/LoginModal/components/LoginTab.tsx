import { useAuth } from '@/hooks/useAuth';
import { Button, f7, List } from 'framework7-react';
import { useState } from 'react';
import Telegram from '@/assets/image/icons/telegram_logo.png';
import { LoginField } from './LoginField';

export const LoginTab = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const { login } = useAuth();
  return (
    <>
      <List form>
        <LoginField
          inputHeader="Username"
          inputType="text"
          f7icon="person"
          autocomplete="username"
          placeholder="Your username"
          value={userData.username}
          labelKey="username"
          setValue={(val) => setUserData({ ...userData, username: val })}
        />

        <LoginField
          inputHeader="Password"
          inputType="password"
          f7icon="lock"
          autocomplete="current-password"
          placeholder="Your password"
          value={userData.password}
          labelKey="password"
          setValue={(val) => setUserData({ ...userData, password: val })}
        />
      </List>

      <Button
        className="h-14 w-full rounded-2xl bg-primary-gradient py-4 normal-case text-white"
        onClick={() => {
          login();
          f7.loginScreen.close('#loginHere');
        }}
      >
        Login
      </Button>

      <div className="pt-5">
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
    </>
  );
};
