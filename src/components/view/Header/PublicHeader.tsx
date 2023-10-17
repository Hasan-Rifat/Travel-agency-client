import React from "react";
import Navbar from "../../ui/Navbar/Navbar";

type PublicHeaderProps = {};

const PublicHeader: React.FC<PublicHeaderProps> = () => {
  const items = [
    { key: "0", href: "/", label: "Home" },
    {
      key: "1",
      href: "/service",
      label: "Service",
    },
    {
      key: "2",
      href: "/login",
      label: "Login",
    },

    {
      key: "3",
      href: "/register",
      label: "Register",
    },
  ];
  return <Navbar items={items} />;
};
export default PublicHeader;
