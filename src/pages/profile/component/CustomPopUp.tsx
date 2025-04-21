import { cn } from '@/globals/utils';
import { Popup, Block, Button } from 'framework7-react';
import { ReactNode } from 'react';

interface PopupProps {
  title: string;
  children?: ReactNode;
  opText?: string;
  clText?: string;
  opAction?: () => void;
  clAction?: () => void;
  open: boolean;
  className?: string;
}

const CustomPopUp = (props: PopupProps) => {
  const { title, opText, opAction, clAction, clText, open, children, className } = props;

  return (
    <Popup
      className={cn('absolute inset-0 m-auto h-fit w-[90%] rounded-3xl bg-[#D1D1D1]', className)}
      opened={open}
      animate={false}
      onPopupClose={clAction}
    >
      <Block className="space-y-5 text-center">
        <p className="text-2xl font-bold">{title}</p>
        {children}
      </Block>
      {opText && clText && (
        <div className="m-0 flex items-end justify-center border-t-[1.5px] border-black">
          <Button
            onClick={opAction}
            className="w-full rounded-none border-r-[1.5px] border-black py-10 text-xl text-red-700"
            large
          >
            {opText}
          </Button>
          <Button onClick={clAction} className="w-full rounded-none py-10 text-xl text-black" large>
            {clText}
          </Button>
        </div>
      )}
    </Popup>
  );
};

export default CustomPopUp;
