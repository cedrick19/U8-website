import { Navbar, NavLeft, NavRight, Link } from "framework7-react";

const HomeNavbar = () => {
  return (
    <Navbar innerClassName="bg-gradient-to-r from-secondary/0 to-secondary/20">
      <NavLeft>
        <Link tabLink="#view-home">
          <img src="/assets/image/logo.png" className="w-30 h-7" />
        </Link>
        <Link href="#">
          <img
            src="/assets/image/Telegram.png"
            alt="Telegram Logo"
            className="h-full w-full"
          />
        </Link>
      </NavLeft>

      <NavRight className="flex items-end justify-end">
        <Link href="#">
          <img src="./assets/image/bell.svg" alt="Notifications" />
        </Link>
      </NavRight>
    </Navbar>
  );
};

export default HomeNavbar;
