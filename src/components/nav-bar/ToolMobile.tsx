import { Link, Toolbar } from "framework7-react"

export const ToolMobile = () => {
    return (
        <>
            <Toolbar tabbar icons bottom>
                <Link tabLink="#home" text="Home" />
                <Link tabLink="#games" text="Games" />
                <Link tabLink="#activity" text="Activity" />
                <Link tabLink="#profile" text="Profile" />
            </Toolbar>
        </>
    )
}

export default ToolMobile;