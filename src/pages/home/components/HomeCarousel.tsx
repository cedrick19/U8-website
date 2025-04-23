import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useState } from 'react';
import { Button } from 'framework7-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '@/assets/image/carousel1.jpg';
import img2 from '@/assets/image/carousel2.jpg';

const HomeCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full pb-3"
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
        <SwiperSlide>
          <img src={img1} alt="Promotional Banner 1" className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Promotional Banner 2" className="h-full w-full object-cover" />
        </SwiperSlide>
      </Swiper>

      <div className="hidden md:block">
        <Button
          className={`swiper-button-prev absolute left-4 top-1/2 hidden bg-opacity-60 p-4 text-white transition-opacity duration-300 md:flex ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <Button
          className={`swiper-button-next absolute right-4 top-1/2 hidden bg-opacity-60 p-4 text-white transition-opacity duration-300 md:flex ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
