"use client"
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

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full flex items-center justify-center">
        <div className="orbit"></div>
        <div className="planet"></div>
       
      </div>
    </main>
  );
}