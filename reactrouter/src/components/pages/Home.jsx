import React, { Component } from 'react'
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import bg1 from "../../assets/img/slider-1.jpg"
import bg2 from "../../assets/img/slider-2.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export class Home extends Component {
  
  render() {
    return (
      <section className='hero'>
        <Swiper
      modules={[EffectFade, Navigation]}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     loop={true}
     autoplay={true}
     speed={500}
     effect={"fade"}
     style={{
      width:"100%",
      height:"100%"
    }}
    >
      <SwiperSlide >
      <img src={bg1} alt="" style={{
        width:"100%",
        height:"100%"
      }}/>
      <div className="text">
        <h1>Quality Cake <br />  with sweet, eggs & breads</h1>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit quia consequuntur magni dolores eos qui ratione</p>
        <a href="">See the recipe</a>
      </div>
      </SwiperSlide>
      <SwiperSlide>
         <img src={bg2} alt="" style={{
        width:"100%",
        height:"100%"
      }}/>
      <div className="text">
        <h1>Quality Cake <br />  with sweet, eggs & breads</h1>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit quia consequuntur magni dolores eos qui ratione</p>
        <a href="">See the recipe</a>
      </div>
      </SwiperSlide>
      
    </Swiper>
      </section>
    )
  }
}

export default Home