"use client";
import React from "react";
import BlogCard from "../service/BlogCard";
import { IBlog } from "@/types";

import RightSide from "./RightSide";
import { useAppSelector } from "@/redux/hooks";
import { items, recentItems } from "@/constants";
type BlogsProps = {};

const Blogs: React.FC<BlogsProps> = () => {
  const data = useAppSelector((state) => state.search.search);

  return (
    <section className="bg-[#fff] pb-3 overflow-hidden py-[60px]">
      <div className="max-w-[1200px]  mx-auto px-5  md:py-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 col-span-1 lg:col-span-5 ">
            {items
              .slice()
              .filter((item) => {
                if (data === "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(data.toLowerCase()) ||
                  item.category.toLowerCase().includes(data.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => (
                <BlogCard item={item} key={item.id} />
              ))}
          </div>
          <div className="col-span-1 lg:col-span-2">
            <RightSide />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blogs;
