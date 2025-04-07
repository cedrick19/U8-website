import { webRoutes } from "@/ts/routes";
import { Block, Button, Icon, Link } from "framework7-react";

export const NavBar = () => {
  return (
    <Block
      className={`container mx-auto flex h-8 w-full items-center justify-between`}
    >
      <Block className="mr-4 flex w-1/5 shrink-0 items-center">
        <Link tabLink="#view-home" className="flex flex-col" rippleColor="none">
          <span className="bg-primary-gradient bg-clip-text text-xl font-bold text-transparent">
            U8.COM
          </span>
          <span className="text-xs font-light text-black">Chinese Gaming</span>
        </Link>
        <Link
          href="#"
          className="flex items-center text-blue-500 no-underline"
          rippleColor="none"
        >
          <Icon f7="logo_telegram" className="text-blue-500" />
          <span className="ml-1 text-xs">@t.u2support</span>
        </Link>
      </Block>

      <Block className="flex w-3/5 justify-center">
        <Block className="flex space-x-6 text-xs">
          {webRoutes.map((route, ids) => (
            <Link key={ids} href={route.path} rippleColor="none">
              <span className="bg-primary-gradient bg-clip-text font-bold text-transparent">
                {route.name.toUpperCase()}
              </span>
            </Link>
          ))}
        </Block>
      </Block>

      <Link
        href="#"
        className="flex flex-col items-center no-underline"
        rippleColor="none"
      >
        <Icon
          f7={"arrow_down_circle"}
          className="bg-primary-gradient bg-clip-text text-xl text-transparent"
        />
        <span className="text-xs text-gray-600">Download</span>
      </Link>

      <Link
        href="#"
        className="flex flex-col items-center no-underline"
        rippleColor="none"
      >
        <Icon
          f7={"bell"}
          className="bg-primary-gradient bg-clip-text text-xl text-transparent"
        />
        <span className="text-xs text-gray-600">News</span>
      </Link>

      <Button
        rippleColor="none"
        className="bg-primary-gradient bg-clip-text text-transparent"
      >
        Login
      </Button>
    </Block>
  );
};

export default NavBar;