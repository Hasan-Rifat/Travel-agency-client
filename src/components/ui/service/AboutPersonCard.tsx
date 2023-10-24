import { IABPerson } from "@/types";
import Image from "next/image";
import React from "react";

type AboutPersonCardProps = {
  item: IABPerson;
};

const AboutPersonCard: React.FC<AboutPersonCardProps> = ({ item }) => {
  return (
    <div className="shadow-custom rounded-xl overflow-hidden">
      <div className="relative">
        <div>
          <Image
            src={item.img}
            alt={item.name}
            className="w-full lg:h-[350px]"
          />
        </div>
      </div>
      <div className="p-5 text-center">
        <p className="text-[#808080] text-sm bg-[#f0f1f2] px-[21px] py-[1px] mb-4 rounded-3xl inline-block">
          {item.description}
        </p>
        <h4 className="text-2xl font-bold mb-2 ">{item.name}</h4>
      </div>
    </div>
  );
};
export default AboutPersonCard;
