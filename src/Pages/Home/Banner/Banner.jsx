import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";


import banner1 from '../../../assets/images/Banner/banner-11.jpg'
import banner2 from '../../../assets/images/Banner/banner-22.jpg'
import banner3 from '../../../assets/images/Banner/banner-33.jpg'
import banner4 from '../../../assets/images/Banner/banner-44.jpg'
import banner5 from '../../../assets/images/Banner/banner-55.jpg'
import banner6 from '../../../assets/images/Banner/banner-6.jpg'
import banner7 from '../../../assets/images/Banner/banner-77.jpg'
import banner8 from '../../../assets/images/Banner/banner-88.jpg'
import banner9 from '../../../assets/images/Banner/banner-9.jpg'

const Banner = () => {
    return (
        <div>
           <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner9} />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;