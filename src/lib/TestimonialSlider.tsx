"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Starts from "@/components/ui/service/Stars";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import Image from "next/image";

type TestimonialSliderProps = {};

const TestimonialSlider: React.FC<TestimonialSliderProps> = () => {
  const settings = {
    dots: true,
    speed: 500,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      id: "1",
      name: "Amy Johnson",
      rating: 2,
      review:
        "Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus",
      img: testimonial1,
    },
    {
      id: "2",
      name: "Amy Johnson",
      rating: 1,
      review:
        "Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus",
      img: testimonial2,
    },
    {
      id: "3",
      name: "Mike Hardson",
      rating: 4,
      review:
        "Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus",
      img: testimonial3,
    },
    {
      id: "4",
      name: "Luaka Smith",
      rating: 4,
      review:
        "Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus",
      img: testimonial1,
    },
  ];

  return (
    <div className="">
      <Slider {...settings} className="bg-[#f5f6f6] h-[500px]  ">
        {reviews.map((item, i) => (
          <div
            key={item.id}
            className=" px-16 py-12 relative w-full -z-10 text-center rounded-3xl bg-white overflow-hidden "
          >
            <div className=" ">
              <div className="flex items-center justify-center">
                <Starts value={item.rating} />
              </div>
              <p className="font-medium text-[#808080] leading-8 mb-[23px]">
                {item.review}
              </p>
              <div className="">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={116}
                  height={116}
                  className="mx-auto p-2 bg-white rounded-full shadow-custom mb-5"
                />
                <h5 className="text-xl font-bold text-[#061a3a] ">
                  {item.name}
                </h5>
                <p className="text-[#808080] text-[15px] font-medium">
                  Traveler
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default TestimonialSlider;
