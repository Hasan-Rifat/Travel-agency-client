import React from "react";
import bg from "@/assets/deals-1.jpg";

type TitleBarProps = {
  title: string;
};

const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`, // Use bg directly here
      }}
      className={`py-20 md:pt-[96px] md:pb-[102px] relative z-0 bg-cover bg-center bg-no-repeat `}
    >
      <div className="absolute w-full h-full left-0 top-0 bg-[#091122] opacity-70 -z-10"></div>
      <div className="max-w-[1200px]  mx-auto px-5  md:py-[50px]">
        <h1 className="text-xl md:text-5xl text-white mb-4 text-center">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default TitleBar;
