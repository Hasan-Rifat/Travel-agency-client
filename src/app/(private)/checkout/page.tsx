"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

type CheckoutProps = { params: string };

const Checkout: React.FC<CheckoutProps> = () => {
  const { order } = useAppSelector((state) => state.order);
  console.log(order);
  return <div>Have a good coding</div>;
};
export default Checkout;
