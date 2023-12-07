import AboutTravel from "@/components/ui/About/AboutTravel";
import ExpertTourGuides from "@/components/ui/About/ExpertTourGuides";
import Testimonials from "@/components/ui/Home/Testimonials";
import TitleBar from "@/components/ui/shared/TitleBar";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main>
      <TitleBar title={"About us"} />
      <AboutTravel />
      <Testimonials />
      <ExpertTourGuides />
    </main>
  );
};
export default page;
