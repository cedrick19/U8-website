import {
  Block,
  Link,
  Page,
  Navbar,
  NavLeft,
  Button,
  NavRight,
} from "framework7-react";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState, useCallback } from "react";
import { getDevice } from "framework7";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Layout from "@/layout/layout";
import { LoginModal } from "@/components/LoginModal";
import TextCarousel from "@/components/TextCarousel/TextCarousel";

const HomePage = () => {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);
  const [isEyeOn, setIsEyeOn] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
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

  const toggleEye = useCallback(() => {
    setIsEyeOn((prev) => !prev);
  }, []);

  const handleRefreshClick = useCallback(() => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
  }, []);

  return (
    <Page>
      {isSmallDevice && (
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
              <img
                src="./assets/image/bell.svg"
                alt="Notifications"
                className="text-xl text-white"
              />
            </Link>
          </NavRight>
        </Navbar>
      )}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full sm:h-10 md:h-auto"
        >
          {["carousel1.jpg", "carousel2.jpg"].map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={`./assets/image/${img}`}
                alt={`Promotional Banner ${i + 1}`}
                className="h-[25vh] w-full sm:h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden md:block">
          {["prev", "next"].map((dir) => (
            <Button
              key={dir}
              className={`swiper-button-${dir} absolute ${
                dir === "prev" ? "left-4" : "right-4"
              } top-1/2 hidden bg-opacity-60 p-4 text-white transition-opacity duration-300 md:flex ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      {isSmallDevice && (
        <div className="space-y-5 rounded-b-[2rem] border-violet-800 p-2 pt-3 shadow-[0_4px_10px_rgba(138,43,226,0.5),0_2px_5px_rgba(138,43,226,0.3)]">
          <TextCarousel />
          <div className="flex w-full items-center justify-between p-3">
            <div className="flex items-center">
              <img
                src="./assets/image/playeraccount.jpg"
                alt="Profile"
                className="h-12 w-12 rounded-full border-2 border-gray-200"
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <span className="mr-2 text-gray-800">username</span>
                  <img src="./assets/image/VIP.svg" alt="VIP" />
                  <img
                    src={`./assets/image/${isEyeOn ? "eye-on" : "eye-off"}.svg`}
                    className="ml-2 h-5 w-5 cursor-pointer"
                    alt="eye toggle"
                    onClick={toggleEye}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">0.00</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-900">
                    <img
                      src="./assets/image/refresh.svg"
                      alt="refresh"
                      onClick={handleRefreshClick}
                      className={`h-3 w-3 cursor-pointer transition-transform duration-1000 ${
                        isSpinning ? "rotate-[1080deg]" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              {["chat.svg", "customer-service.svg"].map((icon, i) => (
                <Button
                  key={i}
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full bg-purple-900 last:mr-0"
                >
                  <img
                    src={`./assets/image/${icon}`}
                    className="h-full w-full"
                  />
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Layout>
        this is home
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
