import React from "react";
import Navbar from "../../ui/Navbar/Navbar";

type UserHeaderProps = {};

const UserHeader: React.FC<UserHeaderProps> = () => {
  const items = [
    { key: "0", href: "/", label: "Home" },
    {
      key: "1",
      href: "/service",
      label: "Service",
    },
  ];
  return <Navbar items={items} hasSider />;
};
export default UserHeader;
