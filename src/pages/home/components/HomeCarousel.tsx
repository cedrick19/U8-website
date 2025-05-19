import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import IntroBanner from '@/assets/image/home/introBanner.jpg';
import LinkBanner from '@/assets/image/home/linkBanner.jpg';

export const HomeCarousel = () => {
  const carouselImages = [IntroBanner, LinkBanner];
  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      modules={[Pagination, Autoplay]}
    >
      {carouselImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Promotional Banner ${index + 1}`} className="w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;
