import AllServiceData from "@/components/ui/servies/AllServiceData";
import TitleBar from "@/components/ui/shared/TitleBar";
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
