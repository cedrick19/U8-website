import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useState } from 'react';
import { Button } from 'framework7-react';
import HomeBanner1 from '@/assets/image/home/banner1.jpg';
import HomeBanner2 from '@/assets/image/home/banner2.jpg';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { cn } from '@/utils/helper';

export const HomeCarousel = () => {
  const [hovered, setHovered] = useState(false);
  const carouselImages = [HomeBanner1, HomeBanner2];
  const navButtonBaseClass =
    'absolute top-1/2 hidden md:flex p-4  bg-opacity-60 transition-opacity ';

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full sm:h-10 md:h-auto"
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Promotional Banner ${index + 1}`}
              className="h-auto w-full sm:h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:block">
        {['prev', 'next'].map((dir) => (
          <Button
            key={dir}
            className={cn(
              `swiper-button-${dir}`,
              dir === 'prev' ? 'left-4' : 'right-4',
              hovered ? 'opacity-100' : 'opacity-0',
              navButtonBaseClass,
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
