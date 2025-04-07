import { Page, Block } from "framework7-react";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";
import { getDevice } from "framework7";

import Layout from "@/layout/layout";
import { LoginModal } from "@/components/LoginModal";
import HomeNavbar from "@/components/Home/HomeNavbar";
import HomeCarousel from "./components/HomeCarousel";
import UserCard from "./components/UserCard";

const HomePage = () => {
  const { t } = useTranslation();

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
    <Page>
      {isSmallDevice && <HomeNavbar />}
      <HomeCarousel />
      {isSmallDevice && <UserCard />}
      <Layout>
        <Block>
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <p className="text-gray-600">{t("description")}</p>
        </Block>
      </Layout>
      <LoginModal />
    </Page>
  );
};

export default HomePage;
