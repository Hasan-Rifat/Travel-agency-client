import Loading from "@/app/loading";
import Button from "@/components/Button";
import { getServiceById } from "@/services/all-service/getServiceIntoDb";
import { IService, response } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const DetailsPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const data: response = await getServiceById(params.id);

  if (!data) {
    return <Loading />;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="max-w-[1200px]  mx-auto px-5 py-5  md:py-[70px]">
        <div className="flex items-center flex-col lg:flex-row gap-10">
          <div className=" w-full   ">
            <p className="mb-3">
              <strong>Category:</strong>{" "}
              <span className="bg-[#808080] text-white px-5 py-1 rounded">
                {data?.data?.category.name}
              </span>
            </p>
            <h1 className="text-gray-900 text-3xl title-font font-medium mt-5">
              {data?.data?.name}
            </h1>
            <p className="leading-relaxed text-[#808080] mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="leading-relaxed text-[#808080] my-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex gap-5 items-center mt-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${data?.data?.price}
              </span>
              <Button>Book Now</Button>
            </div>
          </div>
          <div className=" w-full ">
            <Image
              alt={data?.data?.name}
              height={400}
              width={600}
              className="object-cover object-center rounded shadow-custom"
              src={data?.data?.url}
            />
          </div>
        </div>
        <div className="mt-10 ">
          <div className="p-5 shadow-2xl rounded-lg w-full">
            <table className="table-auto text-left w-full">
              <thead className="">
                <tr className="border ">
                  <th>
                    <span className="px-6 py-1  bg-[#fb7a5a] shadow-xl text-white  font-semibold rounded-2xl">
                      name
                    </span>
                  </th>
                  <th className="px-6 py-3 font-normal ">{data?.data?.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <span className="px-6 py-1  bg-[#fb7a5a] shadow-xl text-white  font-semibold rounded-2xl">
                      category
                    </span>
                  </th>
                  <td className="px-6 py-4">{data.data.category.name}</td>
                </tr>
                <tr>
                  <th className="">
                    <span className="px-6 py-1  bg-[#fb7a5a] shadow-xl text-white  font-semibold rounded-2xl">
                      price
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    <span className="  font-semibold">$</span>
                    {data.data.price}
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="px-6 py-1  bg-[#fb7a5a] shadow-xl text-white  font-semibold rounded-2xl">
                      location{" "}
                    </span>
                  </th>
                  <td className="px-6 py-4">{data.data.location}</td>
                </tr>
                <tr className="">
                  <th className="mt-2 inline-block">
                    <span className="px-6 py-1  bg-[#fb7a5a] shadow-xl text-white  font-semibold rounded-2xl">
                      availability{" "}
                    </span>
                  </th>
                  <td>
                    <span className="px-6 py-4 text-[#15c39a] font-semibold uppercase">
                      {data.data.availability ? "available" : "Not Available"}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailsPage;
