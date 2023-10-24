import { AboutPersonCardInfo } from "@/constants";
import { IABPerson } from "@/types";
import React from "react";
import AboutPersonCard from "../service/AboutPersonCard";

type ExpertTourGuidesProps = {};

const ExpertTourGuides: React.FC<ExpertTourGuidesProps> = () => {
  return (
    <section className="bg-[#fff] py-3">
      <div className="container mx-auto  p-5 md:!p-[50px]">
        <div>
          <div className="text-center mb-14">
            <h5 className="text-[#808080] font-semibold uppercase text-lg">
              TOUR GUIDE
            </h5>
            <h4 className="text-[#061a3a] text-xl md:text-4xl   font-black  uppercase mt-2">
              Expert Tour Guides
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 md:px-20">
          {AboutPersonCardInfo.map((item: IABPerson) => (
            <AboutPersonCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExpertTourGuides;