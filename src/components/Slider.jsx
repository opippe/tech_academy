import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./Body.css"


// import required modules
import { Navigation } from 'swiper/modules';
import Card from './Card';

export default function Slider() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
            </Swiper>
        </>
    );
}
