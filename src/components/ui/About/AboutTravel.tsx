import Image from "next/image";
import about from "@/assets/place-4.jpg";
import { IconType } from "react-icons";
import { GiCheckMark } from "react-icons/gi";
import Button from "@/components/Button";
import { MdSlowMotionVideo } from "react-icons/md";
import Link from "next/link";

type AboutTravelProps = {};

const AboutTravel: React.FC<AboutTravelProps> = () => {
  return (
    <section className="bg-[#fff] py-3">
      <div className="max-w-[1200px]  mx-auto px-5  md:py-[50px]">
        <div className="flex flex-col lg:flex-row items-center gap-24 p-5 md:!p-[50px]">
          <div className="w-full lg:w-1/2 ">
            <div>
              <h5 className="text-[#808080] font-semibold uppercase text-lg">
                About Travel
              </h5>
              <h4 className="text-[#061a3a] text-xl md:text-4xl   font-black  uppercase mt-2">
                World Best Travel Agency Company Since 2008.
              </h4>
            </div>
            <p className="text-[#808080] leading-9 my-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu
              smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum
              suspen disse ultrices gravida Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <div className="shadow-custom mt-2 inline-block">
              <Link href={"/services"}>
                <Button>Find Tours</Button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="flex justify-center ">
              <div className="w-full xl:w-[390px]">
                <Image
                  src={about}
                  alt="about"
                  layout="responsive"
                  className="bg-white p-3 rounded-xl shadow-custom "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutTravel;
