import Button from "@/components/ui/shared/Button";
import React from "react";
import BlogCard from "../shared/BlogCard";
import { IBlog } from "@/types";
import blog1 from "@/assets/place-1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

type BlogsProps = {};

const Blogs: React.FC<BlogsProps> = () => {
  const items: IBlog[] = [
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
    <section className="bg-[#fff] pb-3 overflow-hidden">
      <div className="max-w-[1200px]  mx-auto px-5  md:py-[50px]">
        <div className=" mb-14 flex flex-col lg:flex-row justify-between items-center">
          <div className="">
            <h5 className="text-[#808080] font-semibold uppercase text-lg">
              NEWS & ARTICLES
            </h5>
            <h4 className="text-[#061a3a] text-xl md:text-4xl   font-black  uppercase mt-2">
              Stay Update with Travio Tips
            </h4>
          </div>
          <Button className="mt-5">All Blog Posts</Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <BlogCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blogs;
