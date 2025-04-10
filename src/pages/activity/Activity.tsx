import { Page, Block, Icon } from "framework7-react";
import Layout from "@/layout/layout";
import HomeNavbar from "@/components/MobileNavbar/HomeNavbar";
import activitiesIcon from "@/assets/image/icons/activities.png";
import ballIcon from "@/assets/image/icons/ball.png";
import videoIcon from "@/assets/image/icons/video.png";
import fishIcon from "@/assets/image/icons/fish.png";
import gameIcon from "@/assets/image/icons/game.png";
import newspaperIcon from "@/assets/image/icons/Newspaper.png";

const activities = [
  { id: 1, title: "All Activities", icon: activitiesIcon },
  { id: 2, title: "Newcomer Activities", icon: newspaperIcon },
  { id: 3, title: "Electronic Activities", icon: gameIcon },
  { id: 4, title: "Fishing Activities", icon: fishIcon },
  { id: 5, title: "Video Activities", icon: videoIcon },
  { id: 6, title: "Sports Activities", icon: ballIcon },
];

const ActivityPage = () => {
  return (
    <Page name="settings">
      <HomeNavbar
        navRight={
          <>
            <p className="text-2xl font-bold">0.00</p>
            <Icon
              material="notifications"
              size={30}
              className="text-[#4A226E]"
            />
          </>
        }
      />
      <Layout>
        <Block className="p-1">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {activities.map((activity) => (
              <div key={activity.id} className="w-full">
                <div className="relative h-[160px] w-full overflow-hidden rounded-lg bg-[#F5F3FC] shadow-sm">
                  <div className="absolute left-0 top-0 h-[50px] w-full">
                    <div
                      className="absolute left-0 top-0 h-full w-full bg-[#D5CEF3]"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 100%)",
                      }}
                    />
                    <div
                      className="absolute left-0 top-0 h-full w-full bg-[#C7BCEB]"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 70%)",
                      }}
                    />
                    <div
                      className="absolute left-0 top-0 h-full w-full bg-[#B3A7E3]"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 40%)",
                      }}
                    />
                  </div>

                  <div className="absolute bottom-0 h-[110px] w-full rounded-b-lg">
                    <div className="relative h-full w-full">
                      <div
                        className="absolute bottom-0 h-full w-full rounded-b-lg bg-[#D5CEF3]"
                        style={{ clipPath: "circle(44% at 50% 110%)" }}
                      />
                      <div
                        className="absolute bottom-0 h-full w-full rounded-b-lg bg-[#B8ADE9]"
                        style={{ clipPath: "circle(30% at 50% 110%)" }}
                      />
                      <div
                        className="absolute bottom-0 h-full w-full rounded-b-lg bg-[#A598E2]"
                        style={{ clipPath: "circle(15% at 50% 110%)" }}
                      />
                    </div>
                  </div>
                  <div className="absolute flex h-full w-full flex-col items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <img
                        src={activity.icon}
                        alt={activity.title}
                        className="h-[36px] w-[36px]"
                      />
                    </div>
                    <div className="mt-2 text-center text-lg font-bold text-[#5D3B94]">
                      {activity.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Block>
      </Layout>
    </Page>
  );
};

export default ActivityPage;
