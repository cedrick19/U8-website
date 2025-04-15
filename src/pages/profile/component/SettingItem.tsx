import { cn } from '@/globals/utils';
import { Button, Icon } from 'framework7-react';
import { ButtonProps } from 'framework7-react/components/button.js';

interface SettingItemProps extends ButtonProps {
  iconLeft: string;
  label: string;
  iconRightLabel?: string;
  iconRightLabelClassName?: string;
  iconRight?: string;
  iconRightClassName?: string;
  divider?: boolean;
}

const SettingItem = (props: SettingItemProps) => {
  const {
    iconLeft,
    label,
    iconRightLabel,
    iconRightLabelClassName,
    iconRight,
    iconRightClassName,
    className,
    divider = false,
    ...rest
  } = props;
  return (
    <div>
      <Button className={`${className} flex w-full items-center justify-between`} large {...rest}>
        <div className="flex items-center gap-3">
          <Icon material={iconLeft} className="text-gradient" />
          <p className="normal-case text-black">{label}</p>
        </div>
        <div className="flex items-center gap-3">
          {iconRightLabel && (
            <p className={cn(iconRightLabelClassName, 'normal-case')}>{iconRightLabel}</p>
          )}
          {iconRight && (
            <Icon
              material={iconRight}
              size={iconRight === 'chevron_right' ? 30 : 25}
              className={`${iconRightClassName} -mr-1`}
            />
          )}
        </div>
      </Button>
      {divider && <div className="ml-4 mr-5 h-0 border-b-2 border-slate-100" />}
    </div>
  );
};

export default SettingItem;
