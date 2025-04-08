import HomeOn from "@/assets/image/icons/home-on.svg"
import HomeOff from "@/assets/image/icons/home-off.svg"
import GamesOn from "@/assets/image/icons/games-on.svg"
import GamesOff from "@/assets/image/icons/games-off.svg"
import ActivityOn from "@/assets/image/icons/activity-on.svg"
import ActivityOff from "@/assets/image/icons/activity-off.svg"
import ProfileOn from "@/assets/image/icons/profile-on.svg"
import ProfileOff from "@/assets/image/icons/profile-off.svg"

export const MobileNavItems = [
    {
        tabLink: "home",
        text: "Home",
        icons: {
            iconOn: HomeOn,
            iconOff: HomeOff,
        },
    },
    {
        tabLink: "games",
        text: "Games",
        icons: {
            iconOn: GamesOn,
            iconOff: GamesOff,
        },
    },
    {
        tabLink: "activity",
        text: "Activity",
        icons: {
            iconOn: ActivityOn,
            iconOff: ActivityOff,
        },
    },
    {
        tabLink: "profile",
        text: "Profile",
        icons: {
            iconOn: ProfileOn,
            iconOff: ProfileOff,
        },
    },
]