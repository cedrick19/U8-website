import { Block, Button, Icon, Link, Toolbar } from "framework7-react"
import NavBarBg from "@/assets/image/navbar-bg.svg"
import HomeOn from "@/assets/image/icons/home-on.svg"
import HomeOff from "@/assets/image/icons/home-off.svg"
import GamesOn from "@/assets/image/icons/games-on.svg"
import GamesOff from "@/assets/image/icons/games-off.svg"
import ActivityOn from "@/assets/image/icons/activity-on.svg"
import ActivityOff from "@/assets/image/icons/activity-off.svg"
import ProfileOn from "@/assets/image/icons/profile-on.svg"
import ProfileOff from "@/assets/image/icons/profile-off.svg"
import { Fragment, useState } from "react"

const MobileNavItems = [
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

export const ToolMobile = () => {
    const [activeTab, setActiveTab] = useState<number>(0)
    return (
        <>
            <Toolbar tabbar icons bottom className="bg-transparent">
                <img src={NavBarBg} className="absolute bottom-0 left-0 z-0 w-full h-full object-cover"/>
                {MobileNavItems.map((item, ids) => (
                    <Fragment key={ids}>
                        {ids === 2 && (
                            <Block className="h-full">
                                <Button className="bg-primary-gradient rounded-full w-12 h-12 shadow-secondary/30">
                                    <Icon f7="money_dollar_circle" className="text-white" />
                                </Button>
                            </Block>
                        )}
                        <Link
                            tabLink={`#${item.tabLink}`}
                            rippleColor="none"
                            onClick={() => setActiveTab(ids)}
                        >
                            <img src={activeTab === ids ? item.icons.iconOn : item.icons.iconOff} />
                            <span className={`text-xs ${activeTab === ids ? "bg-primary-gradient bg-clip-text text-transparent" : "text-inactive"}`}>{item.text}</span>
                        </Link>
                    </Fragment>
                ))}
            </Toolbar>
        </>
    )
}

export default ToolMobile;