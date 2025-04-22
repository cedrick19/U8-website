export interface RegisterFormData {
  username: string;
  password: string;
  confirmPassword: string;
  tgCred: string;
  inviteCode: string;
  agree: boolean;
}

export interface LoginFieldType {
  labelKey?: string;
  inputHeader: string;
  f7icon: string;
  inputType: 'text' | 'number' | 'password';
  placeholder?: string;
  value: string;
}

export interface LoginFieldProps extends LoginFieldType {
  setValue: (value: string) => void;
}
