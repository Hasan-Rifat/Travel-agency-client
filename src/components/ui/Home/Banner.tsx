import React from "react";
import { Carousel, Col, Row } from "antd";
import bg from "@/assets/banner-1.jpg";
import about1 from "@/assets/about-1.jpg";
import Image from "next/image";

const Banner: React.FC = () => (
  <Carousel effect="fade">
    <div className="bg-hero bg-cover bg-center lg:h-[80vh] flex items-center relative py-[50px]">
      <Image
        src={bg}
        alt="bg"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 top-0 z-0"
      />
      <div className="bg-[#000] opacity-60 absolute left-0 top-0 w-full h-full"></div>
      <div className="container mx-auto z-10 px-[50px] flex justify-between items-center gap-16  flex-col lg:flex-row">
        <div className="text-white">
          <h1 className="text-7xl  font-bold mb-4 ">Explore Your Travel</h1>
          <p className="text-4xl my-5 leading-10">
            Discover your next great adventure, become an explorer to get
            started!
          </p>
        </div>
        <div>
          <Image
            src={about1}
            alt="hero"
            width={500}
            height={500}
            className="z-10 rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  </Carousel>
);

export default Banner;
