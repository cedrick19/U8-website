import { Button, Icon } from 'framework7-react';
import { ButtonProps } from 'framework7-react/components/button.js';

interface SettingItemProps extends ButtonProps {
  iconLeft: string;
  label: string;
  iconRightLabel?: string;
  iconRight?: string;
  iconRightClassName?: string;
}

const SettingItem = (props: SettingItemProps) => {
  const { iconLeft, label, iconRightLabel, iconRight, iconRightClassName, className, ...rest } =
    props;
  return (
    <Button className={`${className} flex w-full items-center justify-between`} {...rest}>
      <div className="flex items-center gap-3">
        <Icon material={iconLeft} className="text-primary-gradient" />
        <p className="text-black">{label}</p>
      </div>
      <div className="flex gap-3">
        {iconRightLabel && <p className={iconRightClassName}>{iconRightLabel}</p>}
        {iconRight && <Icon material={iconRight} size={30} className="text-primary-gradient -mr-1" />}
      </div>
    </Button>
  );
};

export default SettingItem;
