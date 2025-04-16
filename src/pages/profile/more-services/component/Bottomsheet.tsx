import { Popup } from 'framework7-react';

export const Bottomsheet = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <Popup
      id={id}
      className="!bottom-0 !top-auto mx-auto !h-auto w-full max-w-md rounded-t-3xl p-4 transition-all duration-300"
      push
    >
      {children}
    </Popup>
  );
};
