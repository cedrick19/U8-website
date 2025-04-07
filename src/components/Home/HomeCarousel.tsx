import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import { Button } from "framework7-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
              className="h-auto w-full sm:h-full"
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
  );
};

export default HomeCarousel;
