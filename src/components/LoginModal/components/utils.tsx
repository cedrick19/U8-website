import { LoginFieldType, RegisterFormData } from './type';

export const FieldData = (userData: RegisterFormData): LoginFieldType[] => [
  {
    labelKey: 'username',
    autocomplete: 'username',
    inputHeader: 'Username',
    f7icon: 'person',
    inputType: 'text',
    placeholder: 'Your username',
    value: userData.username,
  },
  {
    labelKey: 'password',
    autocomplete: 'new-password',
    inputHeader: 'Password',
    f7icon: 'lock',
    inputType: 'password',
    placeholder: 'Your password',
    value: userData.password,
  },
  {
    labelKey: 'confirmPassword',
    autocomplete: 'new-password',
    inputHeader: 'Confirm Password',
    f7icon: 'lock',
    inputType: 'password',
    placeholder: 'Re-enter your password',
    value: userData.confirmPassword,
  },
  {
    labelKey: 'tgCred',
    autocomplete: 'tel',
    inputHeader: 'Telegram username or mobile number',
    f7icon: 'paperplane',
    inputType: 'text',
    placeholder: 'Your TG username or mobile number',
    value: userData.tgCred,
  },
  {
    labelKey: 'inviteCode',
    autocomplete: 'off',
    inputHeader: 'Invitation code',
    f7icon: 'envelope',
    inputType: 'text',
    placeholder: 'Your invite code',
    value: userData.inviteCode,
  },
];
