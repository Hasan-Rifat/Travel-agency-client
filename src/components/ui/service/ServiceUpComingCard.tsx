import { Features, UpcomingItems } from "@/types";
import Image from "next/image";
import React from "react";

type AllFeaturesCardProps = {
  items: Features;
};

const AllFeaturesCard: React.FC<AllFeaturesCardProps> = ({ items }) => {
  return (
    <div className="relative shadow-xl flex flex-col justify-center text-center rounded-2xl overflow-hidden bg-white">
      <div>
        <Image
          className="w-full h-full"
          src={items.image.src}
          width={items.image.width}
          height={items.image.height}
          alt="upcoming service"
        />
      </div>
      <div className="p-4 xl:p-5">
        <div className="bg-white w-[30%] h-[55%] lg:w-[20%] lg:h-[55%] xl:h-[18%] mx-auto rounded-full shadow-2xl flex items-center justify-center xl:absolute  xl:left-[40%] xl:top-[45%] p-5">
          <items.icon size={40} className="text-[#ff7c5b]" />
        </div>
        <div className="mt-8 xl:mt-16">
          <h3 className="text-[#061a3a] text-base xl:text-2xl font-bold">
            {items.title}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default AllFeaturesCard;
