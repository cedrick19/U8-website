import { Popup, Block, Button } from 'framework7-react';
import { ReactNode } from 'react';

interface PopupProps {
  title: string;
  label: ReactNode;
  opText: string;
  clText: string;
  opAction?: () => void;
  clAction?: () => void;
  open: boolean;
}

const CustomPopUp = (props: PopupProps) => {
  const { title, label, opText, opAction, clAction, clText, open } = props;

  return (
    <Popup
      className="absolute inset-0 m-auto h-fit w-[90%] rounded-3xl bg-[#D1D1D1]"
      opened={open}
      animate={false}
      onPopupClose={clAction}
    >
      <Block className="space-y-5 text-center">
        <p className="text-2xl font-bold">{title}</p>
        {label}
      </Block>
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
    </Popup>
  );
};

export default CustomPopUp;
