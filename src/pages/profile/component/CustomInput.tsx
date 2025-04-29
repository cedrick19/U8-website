import { cn } from '@/utils/helper';
import { Icon } from 'framework7-react';

import { DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState } from 'react';

type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type RightDecor = 'visibility' | 'textLimit' | ReactNode;
interface CustomInputProps extends InputType {
  className?: string;
  label?: string;
  labelClassName?: string;
  name: string;
  value?: string;
  rightDecoration?: RightDecor;
  leftDecoration?: ReactNode;
}

const CustomInput = (props: CustomInputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    name,
    value,
    label,
    labelClassName,
    className,
    rightDecoration,
    leftDecoration,
    type,
    ...rest
  } = props;

  const renderLeftDecoration = () => {
    if (leftDecoration) {
      return <div className="p-2">{leftDecoration}</div>;
    }
  };

  const renderRightDecoration = () => {
    switch (rightDecoration) {
      case 'textLimit':
        return <p className="text-[#808080]">{value?.length}/12</p>;
      case 'visibility':
        return (
          <div onClick={() => setIsVisible((prev) => !prev)}>
            <Icon material={isVisible ? 'visibility_on' : 'visibility_off'} />
          </div>
        );
      default:
        return rightDecoration;
    }
  };
  let inputType: string | undefined;
  if (isVisible) {
    inputType = 'text';
  } else inputType = 'password';

  return (
    <div className="flex-col space-y-2">
      <label htmlFor={name.toLowerCase()} className={cn('flex w-full', labelClassName)}>
        {label}
      </label>
      <div className={cn('flex items-center rounded-xl bg-[#E6E6E6] p-1 px-5', className)}>
        {renderLeftDecoration()}
        <input
          id={name.toLowerCase()}
          type={rightDecoration === 'visibility' ? inputType : type}
          className="h-10 w-full bg-transparent placeholder-[#808080]"
          name={name}
          maxLength={12}
          value={value}
          {...rest}
        />
        {renderRightDecoration()}
      </div>
    </div>
  );
};

export default CustomInput;
