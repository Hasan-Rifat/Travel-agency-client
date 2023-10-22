import { IService, UpcomingItems } from "@/types";
import Image from "next/image";
import React from "react";
import Starts from "./Stars";
import { GoClock } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import Link from "next/link";
import Button from "@/components/Button";

type ServiceCardProps = {
  items: IService;
  rating: number;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ items, rating }) => {
  console.log(items?.reviews?.length);
  return (
    <div className="relative shadow-xl flex flex-col justify-center  rounded-2xl overflow-hidden bg-white">
      <div>
        <Image
          className="w-full h-full"
          src={items.url}
          width={400}
          height={400}
          alt="upcoming service"
        />
      </div>
      <div className="p-4 xl:p-5">
        <div className="flex items-center gap-5">
          <Starts value={rating} />
          <p className="text-[#808080] text-sm font-medium ">
            {items?.reviews?.length > 0 ? items?.reviews?.length : 0} Review
          </p>
        </div>
        <div className="">
          <h3 className="text-[#061a3a] text-base xl:text-2xl font-bold">
            {items.name}
          </h3>
          <div className="flex gap-2 items-center mb-[15px]">
            <span className="text-[#ff7c5b] text-xl font-bold">
              ${items.price}
            </span>
            <span className="text-[#808080] text-sm font-medium ">
              / Per person
            </span>
          </div>
          <div className="flex justify-around gap-3 px-[14px] py-[10px] bg-[#f5f7f8] rounded-lg">
            <div className="flex items-center  gap-2">
              <p>
                <GoClock size={20} className="text-[#c7c7c7]" />
              </p>
              <span className="text-[#808080] text-sm ">5 days</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <GrMapLocation size={20} className="text-[#c7c7c7]" />
              </span>
              <span className="text-[#808080] text-sm ">{items.location}</span>
            </div>
          </div>
          <p className="my-6 text-[#808080] leading-6">{items.description}</p>
          <p>
            <strong>Category:</strong>{" "}
            <span className="text-[#808080]">{items.category.name}</span>
          </p>
          <div className="flex gap-2 items-center my-[15px] ">
            <span className="text-[#ff7c5b]  font-bold">Availability</span>
            <span className="text-[#808080] text-sm font-medium ">
              {items.availability ? "Available" : "Not Available"}
            </span>
          </div>
          {items.availability ? (
            <Link href={`/service/${items.id}`}>
              <Button className="w-full">Book Now</Button>
            </Link>
          ) : (
            <Button className="w-full" disabled>
              Book Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
