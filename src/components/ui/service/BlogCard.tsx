import Button from "@/components/Button";
import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCalendar } from "react-icons/bi";

type BlogCardProps = {
  item: IBlog;
};

const BlogCard: React.FC<BlogCardProps> = ({ item }) => {
  return (
    <div className="shadow-custom rounded-xl overflow-hidden">
      <div className="relative">
        <div>
          <Image
            src={item.img}
            alt={item.title}
            className="w-full lg:h-[350px]"
          />
        </div>
        <div className="absolute left-[5%] top-[5%] flex items-center">
          <div className="bg-white rounded-full shadow-xl w-[50px] h-[50px] flex items-center justify-center z-40">
            <BiCalendar
              className="bg-[#ff7c5b] text-white p-1 rounded-full"
              size={40}
            />
          </div>
          <p className="bg-white -ml-7 pl-8 text-[#808080] p-2 rounded-tr-xl rounded-br-xl z-20 font-semibold">
            {item.date}
          </p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-[#808080] text-sm bg-[#f0f1f2] px-[21px] py-[1px] mb-4 rounded-3xl inline-block">
          {item.category}
        </p>
        <h4 className="text-2xl font-bold mb-2 ">{item.title}</h4>
        <p className="text-[#808080] mb-3">
          By <strong className="text-[#061a3a]">{item.role}</strong> -{" "}
          {item.date}
        </p>

        <p className="mb-[22px] text-[#808080]">{item.description}</p>
        <Link href={`/blogs/${item.id}`}>
          <Button>See Details</Button>
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;
