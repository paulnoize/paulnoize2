"use client"
import { useState } from 'react';
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import "./stylo.css";


export default function Home() {
  const imageWidth = 240;
  const imageHeight = 240;
  const [showRedSlide, setShowRedSlide] = useState(false);
  const [showBlueSlide, setShowBlueSlide] = useState(false);

  const handleClickRed = () => {
    setShowRedSlide(!showRedSlide);
    setShowBlueSlide(false); 
  };

  const handleClickBlue = () => {
    setShowBlueSlide(!showBlueSlide);
    setShowRedSlide(false); 
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full flex items-center justify-center">
        <div className="orbit-logo-skltn"></div>
        
        <div className="planet-logo-skltn" onClick={handleClickRed}>
          <img src="./skeleton-logo.svg" alt="Logo Skeleton"/>
        </div>
        
        <div className="planet-logo-skltn-blue" onClick={handleClickBlue}>
          <img src="./skeleton-logo.svg" alt="Logo Skeleton"/>
        </div>

        {showRedSlide ? (
          <div className="planet-skltn-red">
            <h1 className="text-white">Skeleton</h1>
          </div>
        ) : showBlueSlide ? (
          <div className="planet-skltn-blue">
            <h1 className="text-white">Contacto</h1>
          </div>
        ) : (
          <Swiper
            className="w-full planet-skltn-swiper"
            modules={[EffectFade, Autoplay]} 
            effect="fade" 
            autoplay={{ delay: 3000 }} 
            loop={true}
          >
            <SwiperSlide>
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/paul.jpg"
                  alt="Imagen Paul Pineda"
                  width={imageWidth}
                  height={imageHeight}
                  priority
                  className="rounded-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/paul2.jpg"
                  alt="Imagen Paul Pineda"
                  width={imageWidth}
                  height={imageHeight}
                  priority
                  className="rounded-full"
                />          
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/paul3.jpg"
                  alt="Imagen Paul Pineda"
                  width={imageWidth}
                  height={imageHeight}
                  priority
                  className="rounded-full "
                />          
              </div>
            </SwiperSlide>
          </Swiper>
        )}

      </div>
    </main>
  );
}