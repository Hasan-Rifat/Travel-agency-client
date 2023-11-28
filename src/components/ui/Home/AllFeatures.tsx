import { allFeatures } from "@/constants";
import { Features } from "@/types";
import React from "react";
import AllFeaturesCard from "../shared/ServiceUpComingCard";

type AllFeaturesProps = {};

const AllFeatures: React.FC<AllFeaturesProps> = () => {
  return (
    <section className="bg-[#f5f6f6] pb-3">
      <div className="max-w-[1200px]  mx-auto px-5  md:py-[50px]">
        <div className="text-center mb-14">
          <h5 className="text-[#808080] font-semibold uppercase text-lg">
            TRAVIO SPECIALS
          </h5>
          <h4 className="text-[#061a3a] text-xl md:text-4xl font-black uppercase mt-2">
            Why Travel with Tutive?
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {allFeatures.map((item: Features) => (
            <AllFeaturesCard items={item} key={item.key} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default AllFeatures;
