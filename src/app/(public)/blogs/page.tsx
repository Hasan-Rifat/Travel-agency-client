import TitleBar from "@/components/TitleBar";
import Blogs from "@/components/ui/Blogs/Blogs";

import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main>
      <TitleBar title={"Blog"} />
      <Blogs />
    </main>
  );
};
export default page;
