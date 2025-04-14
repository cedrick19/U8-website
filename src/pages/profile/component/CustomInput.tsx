import { cn } from '@/globals/utils';

import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface CustomInputProps extends InputType {
  className?: string;
  label?: string;
  labelClassName?: string;
  name: string;
  value?: string;
  rightDecoration?: 'textLimit' | ReactNode;
}

const CustomInput = (props: CustomInputProps) => {
  const { name, value, label, labelClassName, className, rightDecoration, ...rest } =
    props;
  return (
    <div className="flex-col space-y-2">
      <label htmlFor={name} className={cn('flex w-full', labelClassName)}>
        {label}
      </label>
      <div className={cn('flex items-center rounded-xl bg-white p-1 px-5', className)}>
        <input
          className="h-10 w-full placeholder-[#808080]"
          name={name}
          maxLength={12}
          value={value}
          {...rest}
        />
        {rightDecoration === 'textLimit' ? (
          <p className="text-[#808080]">{value?.length}/12</p>
        ) : (
          rightDecoration
        )}
      </div>
    </div>
  );
};

export default CustomInput;
