import { upcomingService } from "@/constants/upcomingService";
import { UpcomingItems } from "@/types";
import { Card } from "antd";
import React from "react";
import ServiceUpComingCard from "../service/ServiceUpComingCard";

type UpcomingProps = {};

const Upcoming: React.FC<UpcomingProps> = () => {
  return (
    <section className="bg-[#f5f6f6]">
      <div className="container mx-auto p-[50px]">
        <div className="text-center mb-14">
          <h5 className="text-[#808080] font-semibold uppercase text-lg">
            Upcoming Services
          </h5>
          <h4 className="text-[#061a3a] text-4xl font-black uppercase mt-2">
            Explore our exciting upcoming travel services.
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {upcomingService.map((item: UpcomingItems) => (
            <ServiceUpComingCard items={item} key={item.key} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Upcoming;
