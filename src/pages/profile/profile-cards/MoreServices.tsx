import { Fragment, useState } from 'react';

import { Block, Button, Link } from 'framework7-react';

import { services } from '@/pages/profile/utils';
import { CustomPopUp } from '@/pages/profile/component/';

import ShareImg from '@/assets/image/profile/more-services/share.png';
import Share from '@/assets/image/profile/more-services/share.svg';
import { f7navigate } from '@/utils/helper';

const MoreServices = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [openShare, setOpenShare] = useState<boolean>(false);

  const renderCustomPopUp = () => {
    return (
      <CustomPopUp open={openShare} clAction={() => setOpenShare(false)} title="">
        <img src={ShareImg} className="w-full justify-self-center rounded-2xl" />

        <div className="flex w-full flex-row gap-2">
          <Button
            className="text-gradient h-14 w-full rounded-xl border border-secondary bg-inherit normal-case"
            onClick={() => {
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
                setOpenShare(false);
              }, 1500);
            }}
          >
            {copied ? 'Copied!' : 'Copy link'}
          </Button>
          <Button
            className="h-14 w-full rounded-xl bg-primary-gradient normal-case text-white"
            onClick={() => setOpenShare(false)}
          >
            Save
          </Button>
        </div>
      </CustomPopUp>
    );
  };

  return (
    <Block className="grid grid-cols-3 gap-5 px-10 py-5">
      {services.map((data, index) => (
        <Fragment key={index}>
          <Link
            id={data.id}
            className="flex-col justify-items-center"
            onClick={() => f7navigate(`${data.id}`, `${data.id}/`)}
          >
            <img alt={data.label} src={data.icon} className="h-10 w-10" />
            <p className="text-center">{data.label}</p>
          </Link>
          {index === 2 && (
            <Link onClick={() => setOpenShare(true)} className="flex-col justify-items-center">
              <img alt="Share" src={Share} className="h-10 w-10" />
              <p className="text-center">Share</p>
            </Link>
          )}
        </Fragment>
      ))}
      {renderCustomPopUp()}
    </Block>
  );
};

export default MoreServices;
