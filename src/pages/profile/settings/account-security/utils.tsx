import EditAccount from '@/assets/image/profile/settings/accnum_and_sec/edit.svg';
import CopyAccount from '@/assets/image/profile/settings/accnum_and_sec/copy.svg';
export const account = [
  {
    iconLeft: 'person',
    label: 'My Account',
    iconRightLabel: 'beluga.cat07',
    iconRight: <img src={CopyAccount} />,
    className: 'rounded-b-none',
    divider: true,
  },
  {
    iconLeft: 'person',
    label: 'Nickname',
    iconRightLabel: 'beluga.cat',
    iconRight: <img src={EditAccount} />,
    className: 'rounded-t-none',
  },
];

export const modPassPop = [
  {
    name: 'currentPassword',
    label: 'Current Password',
    placeholder: 'Enter current password',
  },
  {
    name: 'newPassword',
    label: 'New Password',
    placeholder: 'Enter new password',
  },
  {
    name: 'confirmNewPassword',
    label: 'Confirm New Password',
    placeholder: 'Enter current password again',
  },
];

export const payPass = [
  {
    name: 'currentPassword',
    label: 'Current Password',
    placeholder: 'Enter current password',
  },
  {
    name: 'newPassword',
    label: 'New Password',
    placeholder: 'Enter new password',
  },
];
