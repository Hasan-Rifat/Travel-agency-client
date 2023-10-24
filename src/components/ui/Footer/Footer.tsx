import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Link from "next/link";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#14161c] text-white">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row  p-10 bg-base-200 text-base-content gap-10">
          <div className="w-full lg:w-1/3">
            <h4 className="text-4xl">
              Travel <span className="text-[#ff7c5b]">Agency</span>
            </h4>
            <p className="text-[#aeb1b8] py-5 leading-6">
              Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm
              tempor in cididunt ut labore dolore magna aliqua enim.
            </p>
            <div className="flex items-center gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <h4 className="mb-7 text-2xl font-bold">Services</h4>
            <ul className="list-none flex flex-col gap-4">
              <Link href={"/about-us"} className="text-white no-underline">
                About us
              </Link>
              <Link href={"/our-blogs"} className="text-white no-underline">
                Our Blogs
              </Link>
              <Link href={"/our-services"} className="text-white no-underline">
                Our Services
              </Link>
              <Link href={"/contact-us"} className="text-white no-underline">
                Contact Us
              </Link>
            </ul>
          </div>
          <div className="w-full lg:w-1/3">
            <h4 className="mb-7 text-2xl font-bold">Contacts</h4>
            <div className="list-none flex flex-col gap-4 w-full">
              <div className=" flex items-center gap-1 w-full">
                <IoLocationSharp
                  size={20}
                  className="block text-[#ff7c5b] mr-4 w-[70px]"
                />
                <span className="w-full">
                  Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
                </span>
              </div>
              <div className=" flex items-center gap-1 w-full">
                <FaPhoneAlt
                  size={20}
                  className="block text-[#ff7c5b] mr-4 w-[70px]"
                />
                <span className="block">(+88)01768227738</span>
              </div>

              <div className=" flex items-center flex-wrap gap-1 w-full">
                <MdMarkEmailRead
                  size={20}
                  className="block text-[#ff7c5b] mr-4 w-[70px]"
                />
                <span className="block">contacthasanrifat@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 flex items-center justify-between">
          <aside className="flex items-center gap-5">
            <p>
              Travel agency © {new Date().getFullYear()} All Right Reserved{" "}
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
