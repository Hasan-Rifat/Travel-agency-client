import TestimonialSlider from "@/lib/TestimonialSlider";
import React from "react";
type TestimonialsProps = {};

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="bg-[#f5f6f6] pb-3 overflow-hidden">
      <div className="container mx-auto py-[50px]">
        <div className="text-center mb-14">
          <h5 className="text-[#808080] font-semibold uppercase text-lg">
            REVIEW & TESTIMONIALS
          </h5>
          <h4 className="text-[#061a3a] text-xl md:text-4xl font-black uppercase mt-2">
            Top Reviews for Travio
          </h4>
        </div>
        <div className="p-5">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
