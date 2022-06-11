import React, { Component } from 'react'
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import i1 from '../assets/img/s1.jpg'
import i2 from '../assets/img/s2.jpg'
import i3 from '../assets/img/s3.jpg'
export class Slider extends Component {
  render() {
    return (
      <section className='hero'>
        <div className="container">
        <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      style={{
        width:"100%",
        height:"100%",
      }}
    >
      <SwiperSlide>
       <img src={i1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={i2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={i3} alt="" />
      </SwiperSlide>
    </Swiper>
        </div>
      </section>
    )
  }
}

export default Slider