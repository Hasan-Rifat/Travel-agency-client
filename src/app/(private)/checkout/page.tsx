"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import bg from "@/assets/deals-1.jpg";
import PaymentForm from "@/components/ui/checkout/PaymentForm";
type CheckoutProps = {};

const Checkout: React.FC<CheckoutProps> = () => {
  const { order } = useAppSelector((state) => state.order);

  const date = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  return (
    <main>
      <section>
        <div className="mx-auto max-w-[1200px]  ">
          <div
            className="
          flex
          items-center
          gap-5
          justify-between

          "
          >
            <div
              style={{
                backgroundImage: `url(${bg.src})`, // Use bg directly here
              }}
              className={`py-20 relative -z-0 bg-cover bg-center bg-no-repeat w-full lg:w-1/2  text-white   p-5`}
            >
              <div
                className="
            bg-[#ff7c5b]
            opacity-90
         z-10
            w-full
            h-full
            absolute
            top-0
            left-0
            
            "
              ></div>
              <div className="text-white relative z-20">
                <Link
                  href="/"
                  className="
                text-[#001337]   
              mb-5
              flex
              items-center
              gap-3
              no-underline
              "
                >
                  <span>
                    <IoIosArrowBack size={30} />
                  </span>
                  <span
                    className="
              text-lg 
              lg:text-3xl
              font-bold
              uppercase"
                  >
                    back to home
                  </span>
                </Link>
                <div className="flex flex-col justify-between gap-14">
                  <h4 className="text-lg lg:text-2xl">Booking Summary</h4>

                  <div className="flex flex-col mt-5 gap-3">
                    <div className="flex items-center justify-between">
                      <h5 className="text-2xl capitalize">total days</h5>
                      <p className="text-lg lg:text-2xl font-bold">
                        {order.totalDays}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-2xl capitalize">total guests</h5>
                      <p className="text-lg lg:text-2xl font-bold">
                        {order.travelers}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-2xl capitalize">start date</h5>
                      <p className="text-lg lg:text-2xl font-bold">
                        {date(order.start)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-2xl capitalize">end date</h5>
                      <p className="text-lg lg:text-2xl font-bold">
                        {date(order.end)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-2xl capitalize">specialRequests</h5>
                      <p className="text-lg lg:text-2xl font-bold">
                        {order.specialRequests}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-normal">Grand Total</h2>
                    <p className="text-2xl lg:text-5xl font-bold mt-3">
                      ${order.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="
            w-full
            lg:w-1/2
            "
            >
              <PaymentForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Checkout;
