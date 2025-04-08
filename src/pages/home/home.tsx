import { Page, Block } from "framework7-react";
import { useTranslation } from "react-i18next";

import { LoginModal } from "@/components/LoginModal";
import Layout from "@/layout/layout";
import HomeNavbar from "@/components/MobileNavbar/HomeNavbar";
import HomeCarousel from "./components/HomeCarousel";
import UserCard from "./components/UserCard";
import TextCarousel from "./components/TextCarousel";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <HomeNavbar
        navRight={
          <>
            <img
              src="/assets/image/bell.svg" // Path to your image
              alt="Profile Logo"
              className="h-15 w-15"
            />
          </>
        }
      />
      <HomeCarousel />
      <TextCarousel />
      <UserCard />
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
