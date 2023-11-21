import TitleBar from "@/components/TitleBar";
import AllServiceData from "@/components/ui/all-services/AllServiceData";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <>
      <TitleBar title={"All services"} />
      <AllServiceData />
    </>
  );
};
export default page;
