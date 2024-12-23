import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import pagination styles
import "./CarouselStyle.css";
import {  Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]} // Pass modules here
      slidesPerView={3.5}
      spaceBetween={40}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1500,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://static.wikia.nocookie.net/princess-connect/images/1/1c/Continent_of_Astraea.jpg" alt="not found" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.wikia.nocookie.net/princess-connect/images/1/1c/Continent_of_Astraea.jpg" alt="not found" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.wikia.nocookie.net/princess-connect/images/1/1c/Continent_of_Astraea.jpg" alt="not found" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.wikia.nocookie.net/princess-connect/images/1/1c/Continent_of_Astraea.jpg" alt="not found" />
      </SwiperSlide>
    </Swiper>
  );
}
