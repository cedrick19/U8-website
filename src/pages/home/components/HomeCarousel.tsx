import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useState } from 'react';
import { Button } from 'framework7-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Carousel1 from '@/assets/image/carousel1.jpg';
import Carousel2 from '@/assets/image/carousel2.jpg';

const carouselImages = [
  {
    src: Carousel1,
    alt: 'Promotional Banner 1',
  },
  {
    src: Carousel2,
    alt: 'Promotional Banner 2',
  },
];

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
        {carouselImages.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:block">
        {['prev', 'next'].map((dir) => (
          <Button
            key={dir}
            className={`swiper-button-${dir} absolute top-1/2 hidden bg-opacity-60 p-4 text-white transition-opacity duration-300 md:flex ${
              dir === 'prev' ? 'left-4' : 'right-4'
            } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
