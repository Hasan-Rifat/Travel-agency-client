import TitleBar from "@/components/TitleBar";
import AboutTravel from "@/components/ui/About/AboutTravel";
import ExpertTourGuides from "@/components/ui/About/ExpertTourGuides";
import Testimonials from "@/components/ui/Home/Testimonials";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <>
      <TitleBar title={"About us"} />
      <AboutTravel />
      <Testimonials />
      <ExpertTourGuides />
    </>
  );
};
export default page;
