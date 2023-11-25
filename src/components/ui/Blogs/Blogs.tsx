"use client";
import React from "react";
import BlogCard from "../service/BlogCard";
import { IBlog } from "@/types";
import blog1 from "@/assets/place-1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";
import RightSide from "./RightSide";
import { useAppSelector } from "@/redux/hooks";
type BlogsProps = {};

const Blogs: React.FC<BlogsProps> = () => {
  const data = useAppSelector((state) => state.search.search);

  const items: IBlog[] = [
    {
      id: "1",
      title: "unique Including animation in your design system",
      category: "Lifestyle",
      date: "February 9, 2021",
      role: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
      img: blog1,
    },
    {
      id: "2",
      title: "Including animation in your design system",
      category: "Travel",
      date: "January 27, 2021",
      role: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
      img: blog2,
    },
    {
      id: "3",
      title: "Including animation in your design system",
      category: "Travel",
      date: "January 27, 2021",
      role: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
      img: blog3,
    },
  ];

  const recentItems: IBlog[] = [
    {
      id: "1",
      title: "Including animation in your design system",
      category: "Lifestyle",
      date: "February 9, 2021",
      role: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
      img: blog1,
    },
    {
      id: "2",
      title: "Including animation in your design system",
      category: "Travel",
      date: "January 27, 2021",
      role: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
      img: blog2,
    },
    {
      id: "3",
      title: "Including animation in your design system",
      category: "Travel",
      date: "January 27, 2021",
      role: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectur adip icing sed eiusmod .",
      img: blog3,
    },
  ];

  return (
    <section className="bg-[#fff] pb-3 overflow-hidden py-[60px]">
      <div className="container mx-auto p-5 lg:p-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 col-span-5 ">
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
          <div className="col-span-2">
            <RightSide items={items} recentItems={recentItems} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blogs;
