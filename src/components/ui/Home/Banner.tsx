import React from "react";
import bg from "@/assets/banner-1.jpg";
import about1 from "@/assets/about-1.jpg";
import Image from "next/image";

const Banner: React.FC = () => (
  <section>
    <div className="bg-hero bg-cover bg-center  flex items-center relative ">
      <Image
        src={bg}
        alt="bg"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 top-0 z-0"
      />
      <div className="bg-[#000] opacity-60 absolute left-0 top-0 w-full h-full"></div>
      <div className="container mx-auto z-10  overflow-hidden">
        <div className="flex justify-between items-center lg:gap-16  flex-col lg:flex-row p-5 md:!p-[50px] ">
          <div className="text-white">
            <h1 className="text-4xl md:text-7xl  font-bold mb-4 ">
              Explore Your Travel
            </h1>
            <p className="text-lg md:text-4xl my-5 leading-10">
              Discover your next great adventure, become an explorer to get
              started!
            </p>
          </div>
          <div>
            <Image
              src={about1}
              alt="hero"
              className="z-10 rounded-xl shadow-2xl w-full lg:w-[390px] h-[390px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
