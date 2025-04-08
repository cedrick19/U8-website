import { Icon, Page } from "framework7-react";
import HomeNavbar from "@/components/MobileNavbar/HomeNavbar";

const ProfilePage = () => {
  return (
    <Page name="settings">
      <HomeNavbar
        navRight={
          <>
            <Icon
              material="notifications"
              size={30}
              className="text-[#4A226E]"
            />
            <Icon material="settings" size={30} className="text-[#4A226E]" />
          </>
        }
      />
    </Page>
  );
};

export default ProfilePage;
