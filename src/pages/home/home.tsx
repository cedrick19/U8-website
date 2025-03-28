import { Page } from "framework7-react";
import { useTranslation } from "react-i18next";

import { LoginModal } from "@/components/LoginModal";
import Carousel from "./carousel/carousel";

const HomePage = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <Page>
      <Carousel />
      <div className="container mx-auto">
        this is home
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-gray-600">{t("description")}</p>
      </div>

      <LoginModal />
    </Page>
  );
};

export default HomePage;
