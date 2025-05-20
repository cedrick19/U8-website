import { SupportButtons } from '@/pages/home/components/UserCardComponents/SupportButtons';
import { UserInfo } from '@/pages/home/components/UserCardComponents/Userinfo';

export const UserCard: React.FC = () => {
  return (
    <div className="flex justify-between px-5">
      <UserInfo />
      <SupportButtons />
    </div>
  );
};

export default UserCard;
