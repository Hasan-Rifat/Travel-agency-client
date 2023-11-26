import Button from "@/components/Button";
import RightSide from "@/components/ui/Blogs/RightSide";
import { items } from "@/constants";
import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { BiCalendar } from "react-icons/bi";

type pageProps = {
  params: { id: string };
};

const page: React.FC<pageProps> = ({ params }) => {
  console.log(params.id);

  const item: IBlog[] = items.filter((item) => item.id === params.id);
  return (
    <main>
      <section>
        <div className="max-w-[1200px]  mx-auto px-5  md:py-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
            <div className="col-span-1 lg:col-span-5">
              {item.map((item) => (
                <div key={item.id} className="overflow-hidden">
                  <div className="p-5">
                    <p className="text-[#808080] text-sm bg-[#f0f1f2] px-[21px] py-[1px] mb-4 rounded-3xl inline-block">
                      {item.category}
                    </p>
                    <h4 className="text-2xl font-bold mb-2 ">{item.title}</h4>
                    <p className="text-[#808080] mb-3">
                      By <strong className="text-[#061a3a]">{item.role}</strong>{" "}
                      - {item.date}
                    </p>
                  </div>
                  <div className="relative">
                    <div>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={770}
                        height={470}
                        className=""
                      />
                    </div>
                    <div className="absolute left-[5%] top-[5%] flex items-center">
                      <div className="bg-white rounded-full shadow-xl w-[50px] h-[50px] flex items-center justify-center z-40">
                        <BiCalendar
                          className="bg-[#ff7c5b] text-white p-1 rounded-full"
                          size={40}
                        />
                      </div>
                      <p className="bg-white -ml-7 pl-8 text-[#808080] p-2 rounded-tr-xl rounded-br-xl z-20 font-semibold">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 max-w-[770px]">
                    <p className="mb-[22px] text-[#808080]">
                      Lorem ipsum dolor sit amet consectur adip icing sed
                      eiusmod tempor incididunt labore dolore magna aliqua enim
                      minim veniam quis nostrud exercitation laboris nisi ut
                      aliquip ex commodo consequat duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                    <p className="mb-[22px] text-[#808080]">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit.
                    </p>
                    <p className="mb-[22px] text-[#808080]">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit.
                    </p>
                    <p className="mb-[22px] text-[#808080]">
                      Totam rem aperiam eaque ipsa quae ab illo inventore
                      veritatis quasi architecto beatae vitae dicta sunt
                      explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt. Neque
                      porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-1 lg:col-span-2">
              <RightSide />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default page;
