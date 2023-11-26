import React from "react";
import ServiceCard from "../service/ServiceCard";
import { IService } from "@/types";
import { FaSearch } from "react-icons/fa";
import { getServiceIntoDb } from "@/services/all-service/getServiceIntoDb";
import SearchByData from "./SearchByData";

type AllServiceDataProps = {};

const AllServiceData: React.FC<AllServiceDataProps> = async () => {
  const data = await getServiceIntoDb();
  return (
    <section>
      <div>
        <SearchByData />
        <div className="max-w-[1200px]  mx-auto px-5  md:py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.data?.data?.map((item: IService) => {
              const totalRating = item?.reviews?.reduce(
                (acc, review) => acc + review.rating,
                0
              );

              // Calculate the average rating out of 5
              const averageRating =
                (totalRating / (item?.reviews?.length * 5)) * 5;

              return (
                <ServiceCard
                  items={item}
                  rating={averageRating}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllServiceData;
