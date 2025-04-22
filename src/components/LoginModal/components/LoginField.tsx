import { Button, Icon, Input } from 'framework7-react';
import { useState } from 'react';
import { LoginFieldProps } from './type';

export const LoginField = ({
  labelKey,
  inputHeader,
  f7icon,
  inputType,
  placeholder,
  value,
  setValue,
}: LoginFieldProps) => {
  const [togglePass, setTogglePass] = useState<boolean>(false);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  return (
    <div>
      <span className="text-gradient text-sm">{inputHeader}</span>
      <div className="flex h-12 w-full flex-row items-center gap-2 overflow-hidden truncate whitespace-nowrap rounded-xl border border-gray-500 bg-white px-3">
        <Icon f7={f7icon} size={22} className="text-gradient" />
        <Input
          type={inputType === 'password' && togglePass ? 'text' : inputType}
          autocomplete={`${labelKey}diveu`}
          id={labelKey}
          placeholder={placeholder}
          value={value}
          className="w-full"
          onInput={handleInput}
        />

        {inputType === 'password' && (
          <Button onClick={() => setTogglePass(!togglePass)}>
            <Icon f7={!togglePass ? 'eye_fill' : 'eye_slash_fill'} icon="text-black" size={24} />
          </Button>
        )}
      </div>
    </div>
  );
};
