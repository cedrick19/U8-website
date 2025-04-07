import HomeNavbar from "@/components/Home/HomeNavbar";
import Layout from "@/layout/layout";
import { getDevice } from "framework7";
import { Page, Block } from "framework7-react";
import { useState, useMemo, useEffect } from "react";

const GamesIndexPage = () => {
  const [isTablet, setIsTablet] = useState(false);

  const isMobile = useMemo(() => {
    const device = getDevice();
    return device.ios || device.android;
  }, []);

  const isSmallDevice = isMobile || isTablet;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 600 && width <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Page name="game-index">
      {isSmallDevice && <HomeNavbar />}
      <Layout>
        <Block>
          This is a test for games page for mobile! Feel free to access these
          sites:
        </Block>
      </Layout>
    </Page>
  );
};

export default GamesIndexPage;
