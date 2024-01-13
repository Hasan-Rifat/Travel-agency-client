import { IMenu } from "@/types";
import React from "react";

type HeaderProps = {
  menuItem: IMenu[];
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <section>
      <div className="container mx-auto px"></div>
    </section>
  );
};
export default Header;
