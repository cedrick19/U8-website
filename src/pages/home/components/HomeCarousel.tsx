import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useState } from 'react';
import { Button } from 'framework7-react';
import Carousel1 from '@/assets/image/carousel1.jpg';
import Carousel2 from '@/assets/image/carousel2.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { cn } from '@/globals/utils';

const HomeCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        {[Carousel1, Carousel2].map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Promotional Banner ${i + 1}`}
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
              isHovered ? 'opacity-100' : 'opacity-0',
              'absolute top-1/2 hidden bg-opacity-60 p-4 text-white transition-opacity duration-300 md:flex',
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
