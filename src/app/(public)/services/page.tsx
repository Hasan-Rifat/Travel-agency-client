import TitleBar from "@/components/TitleBar";
import AllServiceData from "@/components/ui/our-services/AllServiceData";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main>
      <TitleBar title={"Our services"} />
      <AllServiceData />
    </main>
  );
};
export default page;
