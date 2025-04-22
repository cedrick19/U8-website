import { LoginFieldType, RegisterFormData } from './type';

export const FieldData = (userData: RegisterFormData): LoginFieldType[] => [
  {
    labelKey: 'username',
    inputHeader: 'Username',
    f7icon: 'person',
    inputType: 'text',
    placeholder: 'Your username',
    value: userData.username,
  },
  {
    labelKey: 'password',
    inputHeader: 'Password',
    f7icon: 'lock',
    inputType: 'password',
    placeholder: 'Your password',
    value: userData.password,
  },
  {
    labelKey: 'confirmPassword',
    inputHeader: 'Confirm Password',
    f7icon: 'lock',
    inputType: 'password',
    placeholder: 'Re-enter your password',
    value: userData.confirmPassword,
  },
  {
    labelKey: 'tgCred',
    inputHeader: 'Telegram username or mobile number',
    f7icon: 'paperplane',
    inputType: 'text',
    placeholder: 'Your TG username or mobile number',
    value: userData.tgCred,
  },
  {
    labelKey: 'inviteCode',
    inputHeader: 'Invitation code',
    f7icon: 'envelope',
    inputType: 'text',
    placeholder: 'Your invite code',
    value: userData.inviteCode,
  },
];
