"use client";
import { useGetAllServiceQuery } from "@/redux/api/service/serviceApiSlice";
import { IService } from "@/types";
import React, { useState } from "react";
import Starts from "../service/Stars";
import ServiceCard from "../service/ServiceCard";

type AllServicesProps = {};

const AllServices: React.FC<AllServicesProps> = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, isLoading } = useGetAllServiceQuery({ ...query });

  return (
    <section>
      <div className="max-w-[1200px]  mx-auto px-5  md:py-[50px]">
        <div className="text-center mb-14">
          <h5 className="text-[#808080] font-semibold uppercase text-lg">
            All Services
          </h5>
          <h4 className="text-[#061a3a] text-xl md:text-4xl font-black uppercase mt-2">
            Explore our exciting travel services.
          </h4>
        </div>
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
              <ServiceCard items={item} rating={averageRating} key={item.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AllServices;
