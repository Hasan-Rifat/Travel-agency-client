import Image from "next/image";
import about from "@/assets/about-1.jpg";
import { IconType } from "react-icons";
import { GiCheckMark } from "react-icons/gi";
import about2 from "@/assets/about-2.jpg";
import Button from "@/components/Button";
import { MdSlowMotionVideo } from "react-icons/md";

type AboutTravelProps = {};

const AboutTravel: React.FC<AboutTravelProps> = () => {
  const items: {
    id: number;
    icon: IconType;
    title: string;
  }[] = [
    {
      id: 1,
      icon: GiCheckMark,
      title: "Ratione voluptatem.sequi nesciunt.",
    },
    {
      id: 2,
      icon: GiCheckMark,
      title: "Ratione voluptatem.",
    },
    {
      id: 3,
      icon: GiCheckMark,
      title: "Ratione voluptatem.sequi nesciunt.",
    },
  ];
  return (
    <section className="bg-[#fff] py-3">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24  p-[50px]">
          <div className="w-full lg:w-1/2 ">
            <div className="flex justify-center">
              <Image
                src={about}
                alt="about"
                className="bg-white p-3 rounded-xl shadow-custom "
              />
            </div>
            <div className="flex items-center mt-12 gap-16 flex-col lg:flex-row ">
              <Image
                src={about2}
                alt="about"
                width={280}
                height={200}
                className="bg-white p-3 rounded-xl shadow-custom "
              />
              <div className="w-full lg:w-[160px]">
                <h5 className="text-[22px] font-bold mb-3">
                  Find your best destination
                </h5>
                <MdSlowMotionVideo size={40} className="text-[#ff7c5b]" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div>
              <h5 className="text-[#808080] font-semibold uppercase text-lg">
                About Travel
              </h5>
              <h4 className="text-[#061a3a] text-5xl  font-black  uppercase mt-2">
                World Best Travel Agency Company Since 2008.
              </h4>
            </div>
            <p className="text-[#808080] leading-9 my-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu
              smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum
              suspen disse ultrices gravida Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <div>
              {items.map((item) => (
                <div key={item.id}>
                  <item.icon />
                  <span className="text-[#808080] ml-2">{item.title}</span>
                </div>
              ))}
            </div>
            <div className="shadow-custom mt-5 inline-block">
              <Button>Find Tours</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutTravel;

/*  <div
            key={item.id}
            className=" px-16 py-12 relative -z-10 text-center rounded-3xl bg-white overflow-hidden"
          >
            <div className="w-full h-full xl:h-[300px]  ">
              <div className="flex items-center justify-center">
                <Starts value={item.rating} />
              </div>
              <p className="font-medium text-[#808080] leading-8 mb-[23px]">
                {item.review}
              </p>
              <div>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={116}
                  height={116}
                  className="mx-auto p-2 bg-white rounded-full shadow-custom absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20"
                />
                <h5 className="text-xl font-bold text-[#061a3a] ">
                  {item.name}
                </h5>
                <p className="text-[#808080] text-[15px] font-medium">
                  Traveler
                </p>
              </div>
            </div>
          </div> */
