import React from "react";
import ServiceCard from "../service/ServiceCard";
import { IService } from "@/types";
import { FaSearch } from "react-icons/fa";
import {
  getData,
  getServiceIntoDb,
} from "@/services/all-service/getServiceIntoDb";
import SearchByData from "./SearchByData";

type AllServiceDataProps = {};

const AllServiceData: React.FC<AllServiceDataProps> = async () => {
  const data = await getData();
  console.log(data);
  return (
    <section>
      <div>
        {/* <SearchByData /> */}
        <div className="container mx-auto p-5 md:p-[50px]">
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
          SearchByData
        </div>
      </div>
    </section>
  );
};
export default AllServiceData;
