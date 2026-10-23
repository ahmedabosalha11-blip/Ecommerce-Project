import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import './hero.css';

function HeroSection() {
  return (
    <div className='hero container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="src/img/banner_Hero1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/img/banner_Hero2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/img/banner_Hero3.jpg" alt="" />
        </SwiperSlide>
        
      
      </Swiper>
    </div>
  )
}

export default HeroSection
