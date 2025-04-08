import { Navbar, NavLeft, NavRight, f7, Icon } from "framework7-react";

type IconProps = {
  type: "image" | "icon" | "text";
  src?: string;
  material?: string;
  size?: number;
  alt?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const IconComponent = ({
  type,
  src,
  material,
  size = 30,
  alt,
  className,
  children,
}: IconProps) => {
  if (type === "image" && src) {
    return <img src={src} alt={alt} className={className} />;
  }

  if (type === "icon" && material) {
    return <Icon material={material} size={size} className={className} />;
  }

  if (type === "text" && children) {
    return <span className={className}>{children}</span>; // Render text
  }

  return null;
};

type HomeNavbarProps = {
  navRight?: React.ReactNode;
};

const HomeNavbar = ({ navRight }: HomeNavbarProps) => {
  const handleNavigate = (viewType: "tab" | "view", url: string) => {
    if (viewType === "tab") {
      f7.tab.show(`#${url}`);
    } else {
      f7.views.main.router.navigate("/games/lottery/");
    }
  };

  return (
    <Navbar innerClassName="bg-gradient-to-tr from-secondary/0 via-secondary/0 to-secondary/20">
      <NavLeft className="pl-3">
        <IconComponent
          type="image"
          src="/assets/image/logo.png"
          className="h-5 w-20"
          onClick={() => handleNavigate("tab", "home")}
        />
        <IconComponent
          type="image"
          src="/assets/image/Telegram.png"
          alt="Telegram Logo"
          className="w-25 h-10"
        />
      </NavLeft>
      <NavRight className="gap-2 pr-2">{navRight}</NavRight>
    </Navbar>
  );
};

export default HomeNavbar;
