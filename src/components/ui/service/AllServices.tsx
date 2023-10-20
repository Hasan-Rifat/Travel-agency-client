"use client";
import { useGetAllServiceQuery } from "@/redux/api/service/serviceApiSlice";
import { IService } from "@/types";
import React, { useState } from "react";
import Starts from "./Stars";
import ServiceCard from "./ServiceCard";

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
      <div className="container mx-auto p-[50px]">
        <div className="grid grid-cols-3 gap-5">
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
