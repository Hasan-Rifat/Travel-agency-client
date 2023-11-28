"use client";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import Button from "@/components/ui/shared/Button";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";
import { IService } from "@/types";
import { useAppDispatch } from "@/redux/hooks";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

// Desired date format
const desiredDateFormat = "YYYY-MM-DDTHH:mm:ss[Z]";

interface IProps {
  data: IService;
}

const Calender: React.FC<IProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [hydrated, setHydrated] = useState(false);
  const [count, setCount] = useState(1);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    console.log("onOk: ", value);
  };

  const bookOrder = (data: IProps): void => {
    // const date;
    // dispatch(bookOrder(data));
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
                onClick={() => setCount(count - 1)}
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
            onOk={onOk}
            popupClassName="text-black"
            format={desiredDateFormat}
          />
        </div>
        <div className="flex items-center gap-2 flex-row lg:flex-col justify-between lg:justify-normal">
          <span className="title-font font-semibold text-2xl text-[#001337]">
            ${data?.price}
          </span>
          <div>
            <Button className="">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
