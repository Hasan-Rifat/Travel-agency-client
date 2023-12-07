"use client";
import Button from "@/components/ui/shared/Button";
import { useConfirmOrderMutation } from "@/redux/api/booking/bookingApiSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeOrder } from "@/redux/slice/orderSlice";
import { IBook } from "@/types";
import { message } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";

type ThankYouProps = {
  searchParams: {
    payment_intent: string;
    payment_intent_client_secret: string;
    redirect_status: string;
  };
};

const ThankYou: React.FC<ThankYouProps> = ({ searchParams }) => {
  const order = useAppSelector((state) => state.order.order);
  const [
    confirmOrder,
    {
      data: confirmOrderData,
      isLoading: confirmOderLoading,
      isSuccess,
      isError,
    },
  ] = useConfirmOrderMutation();
  const dispatch = useAppDispatch();

  /* useEffect(() => {
    const confirmOrderHandler = async () => {
      const orderData: IBook = {
        serviceId: order.serviceId,
        userId: order.userId,
        status: "accept",
        start: order.start,
        end: order.end,
        travelers: order.travelers,
        specialRequests: order.specialRequests,
        price: order.price,
        totalDays: order.totalDays,
        id: order.id as string,
        paymentId: searchParams.payment_intent,
      };

      // create order in database
      await confirmOrder(orderData);

      if (isSuccess) {
        dispatch(removeOrder());
      }
    };
    confirmOrderHandler();
  }, [
    confirmOrder,
    dispatch,
    isSuccess,
    order.end,
    order.id,
    order.price,
    order.serviceId,
    order.specialRequests,
    order.start,
    order.totalDays,
    order.travelers,
    order.userId,
    searchParams.payment_intent,
  ]); */

  /*   useEffect(() => {
    if (confirmOderLoading) {
      message.loading("Loading...");
    }
    if (isSuccess) {
      message.success("Order confirm successfully");
      // Navigate to checkout page after success
    }
  }, [isSuccess, confirmOderLoading]); */

  useEffect(() => {
    const confirmOrderHandler = async () => {
      const orderData: IBook = {
        serviceId: order.serviceId,
        userId: order.userId,
        status: "accept",
        start: order.start,
        end: order.end,
        travelers: order.travelers,
        specialRequests: order.specialRequests,
        price: order.price,
        totalDays: order.totalDays,
        id: order.id as string,
        paymentId: searchParams.payment_intent,
      };

      // create order in database
      await confirmOrder(orderData);

      if (isSuccess) {
        dispatch(removeOrder());
      }
    };

    if (confirmOderLoading) {
      message.loading("Loading...");
    }

    if (isSuccess) {
      confirmOrderHandler();
      message.success("Order confirm successfully");
      // Navigate to checkout page after success
    }
  }, [
    confirmOrder,
    dispatch,
    isSuccess,
    confirmOderLoading,
    order.end,
    order.id,
    order.price,
    order.serviceId,
    order.specialRequests,
    order.start,
    order.totalDays,
    order.travelers,
    order.userId,
    searchParams.payment_intent,
  ]);

  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6  ">
        <div className="flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-14 h-14 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
        </div>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day!</p>
          <div className="py-10 text-center">
            <Link href="/" className="">
              <Button> GO BACK</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThankYou;
