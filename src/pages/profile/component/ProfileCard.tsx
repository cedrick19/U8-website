import { Block, Card } from "framework7-react";
import { CardProps } from "framework7-react/components/card.js";
import { ReactNode, useCallback, useState } from "react";

interface ProfileCardProps {
  className?: string;
  children?: ReactNode;
  pCardStyle?: CardProps;
  pCardTitle: string | ReactNode;
  refresh?: boolean;
}

const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    children,
    pCardStyle,
    pCardTitle,
    refresh = false,
  } = props;

  const [isSpinning, setIsSpinning] = useState(false);
  const handleRefreshClick = useCallback(() => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
  }, []);
  return (
    <Card
      className={`${className} relative min-h-[105px] border-2 border-white bg-[#ECE8F5] py-5 shadow-md shadow-[#d4caf9]`}
      raised
      {...pCardStyle}
    >
      <div className="absolute top-0 h-[110px] w-full rounded-t-lg">
        <div className="relative h-full w-full">
          <div
            className="absolute left-0 top-0 h-full w-full rounded-tl-lg bg-[#D5CEF3]"
            style={{ clipPath: "circle(37% at 0 0)" }}
          />
          <div
            className="absolute left-0 top-0 h-full w-full rounded-tl-lg bg-[#B8ADE9]"
            style={{ clipPath: "circle(25% at 0 0)" }}
          />
          <div
            className="absolute left-0 top-0 h-full w-full rounded-tl-lg bg-[#A598E2]"
            style={{ clipPath: "circle(17% at 0 0)" }}
          />
        </div>
      </div>
      <Block className="z-10 flex w-full justify-between">
        <div className="font-extrabold">{pCardTitle}</div>
        {refresh && (
          <div className="flex items-center gap-2">
            <img
              src="./assets/image/refresh.svg"
              alt="refresh"
              onClick={handleRefreshClick}
              className={`h-5 w-5 cursor-pointer rounded-full bg-primary-gradient p-1 transition-transform duration-1000 ${
                isSpinning ? "rotate-[1080deg]" : ""
              }`}
            />
            <p className="font-extrabold">Refresh</p>
          </div>
        )}
      </Block>
      {children}
    </Card>
  );
};

export default ProfileCard;
