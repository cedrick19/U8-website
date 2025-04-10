import {
  Page,
  Block,
  Navbar,
  NavLeft,
  Card,
  CardContent,
  f7,
  NavRight,
  Icon,
} from "framework7-react";
import ProfileCard from "./component/ProfileCard";
import GamesManagement from "@/assets/image/icons/game_management.svg";
import FundManagement from "@/assets/image/icons/fund_management.svg";
import RechargeTutorial from "@/assets/image/icons/recharge_tutorial.svg";
import Share from "@/assets/image/icons/share.svg";
import ComingSoon from "@/assets/image/icons/coming_soon.svg";
import AvatarIcon from "@/assets/image/avatarIcon.png";
import CoinOff from "@/assets/image/icons/coin-off.svg";
import Refresh from "@/assets/image/refresh.svg";
import Logo from "@/assets/image/logo.png";
import Telegram from "@/assets/image/Telegram.png";

export interface Services {
  icon: string;
  label: string;
}

const services: Services[] = [
  {
    icon: GamesManagement,
    label: "Game Management",
  },
  {
    icon: FundManagement,
    label: "Fund Management",
  },
  {
    icon: RechargeTutorial,
    label: "Recharge Tutorial",
  },
  {
    icon: Share,
    label: "Share",
  },
  {
    icon: ComingSoon,
    label: "Coming Soon",
  },
];

const handleNavigate = (viewType: "tab" | "view", url: string) => {
  if (viewType === "tab") {
    f7.tab.show(`#${url}`);
  } else {
    f7.views.main.router.navigate("/games/lottery/");
  }
};
const ProfilePage = () => {
  return (
    <Page name="profile">
      <Navbar innerClassName="bg-gradient-to-tr from-secondary/0 via-secondary/0 to-secondary/20">
        <NavLeft className="pl-3">
          <img
            src={Logo}
            className="h-5 w-20"
            onClick={() => handleNavigate("tab", "home")}
          />
          <img src={Telegram} alt="Telegram Logo" className="w-25 h-10" />
        </NavLeft>
        <NavRight className="gap-2 pr-3">
          <Icon material="notifications" size={30} className="text-[#4A226E]" />
          <div
            onClick={() => f7.view.main.router.navigate("/profile/settings/")}
          >
            <Icon material="settings" size={30} className="text-[#4A226E]" />
          </div>
        </NavRight>
      </Navbar>
      <Block className="flex h-16 items-center">
        <img
          slot="media"
          src={AvatarIcon}
          className="h-16 w-16 rounded-full bg-blue-500"
        />
        <Block className="flex-col gap-1">
          <p className="text-lg">beluga.cat</p>
          <p className="text-xs">Member Account: beluga.cat07</p>
        </Block>
      </Block>
      <ProfileCard
        refresh
        pCardTitle="My Wallet"
        className="relative bg-[#ECE8F5] py-5 shadow-[#E1DCF3]"
      >
        <Card
          className="z-10 border-2 border-white bg-primary-gradient shadow-md shadow-[#d4caf9]"
          raised
        >
          <CardContent className="py-10">
            <p className="text-md text-center text-white">Wallet Balance</p>
            <p className="text-center text-2xl text-white">0.00</p>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center gap-5">
          <Block className="flex gap-2 font-bold">
            <img
              src={CoinOff}
              alt="recharge"
              className="h-5 w-5 cursor-pointer rounded-full bg-primary-gradient p-[2.4px]"
            />
            <p>Recharge</p>
          </Block>
          <div className="h-8 border-[1px] border-slate-300" />
          <Block className="flex gap-2 font-bold">
            <img
              src={Refresh}
              alt="recharge"
              className="h-5 w-5 cursor-pointer rounded-full bg-primary-gradient p-1"
            />
            <p>Refresh</p>
          </Block>
        </div>
      </ProfileCard>

      <ProfileCard
        refresh
        pCardTitle={
          <p>
            Today's Income: <span className="text-[#3B1E7A]">April 7</span>
          </p>
        }
      >
        <Card
          className="z-10 border-2 border-white bg-[#ECE8F5] shadow-md shadow-[#d4caf9]"
          raised
        >
          <CardContent className="flex items-center justify-center gap-5 py-10">
            <Block className="">
              <p className="text-center text-2xl font-bold text-[#4A4A4A]">
                0 &gt;
              </p>
              <p className="text-md text-center text-[#3B1E7A]">
                Nubmer of Statements
              </p>
            </Block>
            <div className="h-16 border-[1px] border-slate-300" />
            <Block className="">
              <p className="text-center text-xl font-bold text-[#4A4A4A]">
                0.00 &gt;
              </p>
              <p className="text-md text-center text-[#3B1E7A]">
                Total profit and loss
              </p>
            </Block>
            <div className="h-16 border-[1px] border-slate-300" />
            <Block className="">
              <p className="text-center text-xl font-bold text-[#4A4A4A]">
                0.00 &gt;
              </p>
              <p className="text-md text-center text-[#3B1E7A]">
                Real-time water return
              </p>
            </Block>
          </CardContent>
        </Card>
      </ProfileCard>

      <ProfileCard pCardTitle="More Services" className="mb-24">
        <Block className="grid grid-cols-3 gap-5 px-10 py-5">
          {services.map((data, index) => (
            <div key={index} className="flex-col justify-items-center">
              <img src={data.icon} className="h-10 w-10" />
              <p className="text-center">{data.label}</p>
            </div>
          ))}
        </Block>
      </ProfileCard>
    </Page>
  );
};

export default ProfilePage;
