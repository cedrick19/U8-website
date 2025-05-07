import { Page, Block, f7, Icon } from 'framework7-react';
import ProfileCard from './component/ProfileCard';
import AvatarIcon from '@/assets/image/icons/avatarIcon.png';

import Copy from '@/assets/image/profile/settings/accnum_and_sec/copy.svg';
import { f7navigate } from '@/utils/helper';
import { useState } from 'react';
import { MobileNavbar } from '@/components';
import { CopySubLabel } from './types';
import { profileCardList } from './utils';

const ProfilePage = () => {
  const [subCopy, setSubCopy] = useState<CopySubLabel>({
    subLabel: 'beluga.cat07',
    isCopied: false,
  });

  const handleCopy = async () => {
    if (!subCopy.isCopied) {
      await navigator.clipboard.writeText(subCopy.subLabel);
      setSubCopy({ ...subCopy, isCopied: true });

      setTimeout(() => {
        setSubCopy({ ...subCopy, isCopied: false });
      }, 10000);
    }
  };
  return (
    <Page name="profile">
      <MobileNavbar
        mode="home"
        navRight={
          <>
            <div id="notifications" onClick={() => f7navigate('notifications', '/notifications/')}>
              <Icon material="notifications" size={35} className="text-gradient" />
            </div>
            <div onClick={() => f7.view.main.router.navigate('settings/')}>
              <Icon material="settings" size={30} className="text-gradient" />
            </div>
          </>
        }
      />
      <Block className="px-0 pb-20">
        <Block className="flex h-16 items-center">
          <img
            alt="Avatar"
            slot="media"
            src={AvatarIcon}
            className="h-16 w-16 rounded-full bg-blue-500"
          />
          <Block>
            <p className="text-lg">beluga.cat</p>
            <Block className="m-0 flex items-center p-0">
              <p className="text-xs">Member Account: {subCopy.subLabel}</p>
              {subCopy.isCopied ? (
                <Icon f7="checkmark" size={15} />
              ) : (
                <img src={Copy} onClick={handleCopy} className="h-4 w-4" />
              )}
            </Block>
          </Block>
        </Block>
        {profileCardList.map(({ profileCard, title }, index) => (
          <ProfileCard key={index} refresh={index === 2} pCardTitle={title}>
            {profileCard}
          </ProfileCard>
        ))}
      </Block>
    </Page>
  );
};

export default ProfilePage;
