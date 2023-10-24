import { upcomingService } from "@/constants";
import { IService, UpcomingItems } from "@/types";
import React from "react";
import ServiceCard from "../service/ServiceCard";
import UpcomingServiceCard from "../service/UpcomingServiceCard";

type UpcomingServiceProps = {};

const UpcomingService: React.FC<UpcomingServiceProps> = () => {
  return (
    <section className="bg-[#f5f6f6] pb-3">
      <div className="container mx-auto p-5 md:p-[50px]">
        <div className="text-center mb-14">
          <h5 className="text-[#808080] font-semibold uppercase text-lg">
            UPcoming Travel services
          </h5>
          <h4 className="text-[#061a3a] text-xl md:text-4xl  leading-9 font-black uppercase mt-2">
            Upcoming Travel Service for Bangladesh there are many variations
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {upcomingService.map((item: UpcomingItems) => (
            <UpcomingServiceCard rating={0} items={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default UpcomingService;
