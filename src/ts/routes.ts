import Chess from "@/pages/desktop/chess/Chess";
import Electronic from "@/pages/desktop/electronic/Electronic";
import Fishing from "@/pages/desktop/fishing/fishing";
import Lottery from "@/pages/desktop/lottery/Lottery";
import Sports from "@/pages/desktop/sports/sports";
import VideoPage from "@/pages/desktop/video/video";
import HomePage from "@/pages/mobile/home";

export const webRoutes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/games/lottery/",
    name: "Lottery",
    component: Lottery,
  },
  {
    path: "/games/sports/",
    name: "Sports",
    component: Sports,
  },
  {
    path: "/games/video/",
    name: "Video",
    component: VideoPage,
  },
  {
    path: "/games/electronic/",
    name: "Electronic",
    component: Electronic,
  },
  {
    path: "/games/chess/",
    name: "Chess",
    component: Chess,
  },
  {
    path: "/games/fishing/",
    name: "Fishing",
    component: Fishing,
  },
];