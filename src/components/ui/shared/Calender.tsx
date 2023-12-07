"use client";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import Button from "@/components/ui/shared/Button";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space, message } from "antd";
import { IOrder, IService } from "@/types";
import { getUserInfo } from "@/services/auth.service";
import { bookOrder } from "@/redux/slice/orderSlice";
import { useRouter } from "next/navigation";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { useAppDispatch } from "@/redux/hooks";
import { useCreateOrderMutation } from "@/redux/api/booking/bookingApiSlice";
import Link from "next/link";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

// Desired date format
const desiredDateFormat = "YYYY-MM-DDTHH:mm:ss[Z]";

interface IProps {
  data: IService;
}

const Calender: React.FC<IProps> = ({ data }) => {
  const [createOrder, { isLoading, data: newOrderData, error, isSuccess }] =
    useCreateOrderMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userId } = getUserInfo() as any;
  const [count, setCount] = useState<number>(1);
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [days, setDays] = useState<number>(0);
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [orderData, setOrderData] = useState<IOrder>({
    serviceId: "",
    price: "",
    start: "",
    end: "",
    travelers: 0,
    specialRequests: "",
    userId: "",
    status: "",
    totalDays: 0,
  });

  useEffect(() => {
    if (isLoading) {
      message.loading("Loading...");
    } else if (isSuccess) {
      message.success("Order created successfully");
      // Navigate to checkout page after success
      dispatch(
        bookOrder({
          end: newOrderData.data.booking.end,
          id: newOrderData.data.booking.id,
          price: newOrderData.data.booking.price,
          serviceId: newOrderData.data.booking.serviceId,
          specialRequests: newOrderData.data.booking.specialRequests,
          start: newOrderData.data.booking.start,
          status: newOrderData.data.booking.status,
          totalDays: newOrderData.data.booking.totalDays,
          travelers: newOrderData.data.booking.travelers,
          userId: newOrderData.data.booking.userId,
        })
      );
      router.push(`/checkout`);
    } else if (error) {
      message.error(error as string);
    }
  }, [isLoading, isSuccess, error, router, dispatch, newOrderData]);

  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ): void => {
    // console.log("Selected Time: ", value);
    // console.log("Formatted Selected Time: ", dateString);
    setDays(0);
    if (dateString[0] && dateString[1]) {
      const startMoment = dayjs(dateString[0]);
      const endMoment = dayjs(dateString[1]);
      const durationInDays = endMoment.diff(startMoment, "day") + 1; // Adding 1 to include both start and end days
      setDays(durationInDays);
    }

    setStart(dateString[0]);
    setEnd(dateString[1]);
  };

  const bookOrderData = async (data: IService): Promise<void> => {
    const payload: IOrder = {
      serviceId: data.id,
      price: String(+data.price + count * 10 + days * 10),
      start: start,
      end: end,
      travelers: count,
      specialRequests: specialRequests ? specialRequests : "",
      userId: userId,
      status: "pending",
      totalDays: days,
    };

    try {
      // Make the API call
      await createOrder(payload).unwrap();

      // If successful, dispatch action and set order data
    } catch (error) {
      console.log(error, "error");
      // Handle any errors and let the useEffect display the error message
    }
  };

  return (
    <div className="mt-5">
      <div className="lg:max-w-[500px] lg:mx-0 w-full mx-auto">
        <div className="flex gap-5 items-center justify-between lg:gap-10 mb-5">
          <div>
            <span className=" font-bold text-[#001337]  uppercase  rounded-2xl">
              location{" "}
            </span>
          </div>
          <div className="  text-[#ff7c5b]  capitalize font-semibold rounded-2xl">
            {data?.location}
          </div>
        </div>
        <div className="flex gap-5 items-center justify-between lg:gap-10 mb-5">
          <div className=" ">
            <span className=" font-bold text-[#001337]  uppercase  rounded-2xl">
              availability{" "}
            </span>
          </div>
          <div className="flex items-center">
            <span className=" text-[#15c39a] font-semibold capitalize">
              {data?.availability ? "available" : "Not Available"}
            </span>
          </div>
        </div>
        <div className="mb-5">
          <div
            className="
          flex 
          items-center 
          gap-5
          justify-between
          "
          >
            <label
              htmlFor="counter-input"
              className="
              block 
              text-[#001337] 
              uppercase
              border-none 
              rounded-2xl
              font-semibold
              "
            >
              travelers
            </label>
            <div className="relative flex items-center">
              <button
                onClick={() => count > 1 && setCount(count - 1)}
                type="button"
                id="decrement-button"
                data-input-counter-decrement="counter-input"
                className="flex-shrink-0 bg-gray-100  :bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100  focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-2.5 h-2.5 text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="counter-input"
                data-input-counter=""
                className="flex-shrink-0 text-gray-900 border-none  bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                placeholder=""
                value={count}
                required
              />
              <button
                onClick={() => setCount(count + 1)}
                type="button"
                id="increment-button"
                data-input-counter-increment="counter-input"
                className="flex-shrink-0 bg-gray-100  :bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100  focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-2.5 h-2.5 text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between w-full">
        <div>
          <RangePicker
            onChange={onChange}
            popupClassName="text-black w-full"
            format={desiredDateFormat}
          />
          <div>
            <textarea
              id="message"
              onChange={(e) => setSpecialRequests(e.target.value)}
              rows={4}
              className="mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#ff7c5b] focus:ring-[#ff7c5b] focus:border-[#ff7c5b] "
              placeholder=" write Your special Requests here..."
              defaultValue={""}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 flex-row lg:flex-col justify-between lg:justify-normal">
          <span className="title-font font-semibold text-2xl text-[#001337]">
            ${+data?.price + count * 10 + days * 10}
          </span>
          <div>
            <Button onClick={() => bookOrderData(data)} className="">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
