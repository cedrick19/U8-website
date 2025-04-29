import { cn } from '@/utils/helper';
import { Button, Icon } from 'framework7-react';
import { ButtonProps } from 'framework7-react/components/button.js';
import { ReactNode } from 'react';

interface SettingItemProps extends ButtonProps {
  iconLeft: ReactNode;
  iconClassName?: string;
  label: string;
  iconRightLabel?: string;
  iconRightLabelClassName?: string;
  iconRight?: ReactNode;
  iconRightClassName?: string;
  divider?: boolean;
}

const SettingItem = (props: SettingItemProps) => {
  const {
    iconLeft,
    iconClassName,
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
      <Button className={cn('flex w-full items-center justify-between', className)} large {...rest}>
        <div className="flex items-center gap-3">
          {typeof iconLeft === 'string' ? (
            <Icon
              material={iconLeft}
              size={iconLeft === 'chevron_right' ? 30 : 25}
              className={cn('text-[#4C236D]', iconClassName)}
            />
          ) : (
            iconLeft
          )}
          <p className="normal-case text-black">{label}</p>
        </div>
        <div className="flex items-center gap-3">
          {iconRightLabel && (
            <p className={cn(iconRightLabelClassName, 'normal-case')}>{iconRightLabel}</p>
          )}
          {typeof iconRight === 'string' ? (
            <Icon
              material={iconRight}
              size={iconRight === 'chevron_right' ? 30 : 25}
              className={cn('text-gradient -mr-1', iconRightClassName)}
            />
          ) : (
            iconRight
          )}
        </div>
      </Button>
      {divider && <div className="ml-4 mr-5 h-0 border-b-2 border-slate-100" />}
    </div>
  );
};

export default SettingItem;
