"use client";
import { useAppDispatch } from "@/redux/hooks";
import { storeSearch } from "@/redux/slice/searchSlice";
import { IBlog } from "@/types";
import Image from "next/image";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

type RightSideProps = {
  items: IBlog[];
  recentItems: IBlog[];
};

const RightSide: React.FC<RightSideProps> = ({ items, recentItems }) => {
  const dispatch = useAppDispatch();
  const handelSubmit = (e: string) => {
    dispatch(storeSearch(e));
  };

  const unique: Set<string> = new Set<string>([
    ...items.map((item) => item.category),
  ]);

  return (
    <div>
      {/* search */}
      <div className="blog__shadow p-5 rounded-lg mb-10">
        <div className="mb-3">
          <div className="relative mb-4 flex w-full ">
            <input
              type="search"
              onChange={(e) => handelSubmit(e.target.value)}
              className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border-neutral-600 border  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />
            {/*Search button*/}
            <button
              className="relative z-[2] border-none flex items-center rounded-r bg-[#ff7c5b] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white blog__shadow transition duration-150 ease-in-out hover:bg-[#ff7c5bc4] hover:shadow-lg focus:bg-[#ff7c5bc4] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#ff7c5d] active:shadow-lg"
              type="submit"
              id="button-addon1"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* blog category */}
      <div className="blog__shadow p-5 rounded-lg mb-5">
        <h4 className="blog__title">Category</h4>
        <ul className="text-[#555] mb-5 list-none flex flex-col gap-5">
          {Array.from(unique).map((item, index) => (
            <li
              onClick={() => handelSubmit(item)}
              key={index}
              className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#ff7c5b] transition duration-150 ease-in-out"
            >
              <MdArrowRightAlt size={20} className="text-[#ff7c5b]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* recent post */}
      <div>
        <div className="blog__shadow p-5 rounded-lg mb-5 bg-white">
          <div>
            <h4 className="blog__title">Recent Post</h4>
            <div>
              <div className="flex gap-5 flex-col">
                {recentItems.map((item) => (
                  <div key={item.id} className="">
                    <div className="flex items-center gap-3">
                      <Image
                        width={60}
                        height={60}
                        src={item.img}
                        className="rounded-full"
                        alt="blog"
                      />
                      <div>
                        <p className="text-[#808080] text-sm">{item.date}</p>
                        <h5 className="text-[#061a3a] text-base">
                          {item.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightSide;
