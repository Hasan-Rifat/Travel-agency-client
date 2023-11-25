import React from "react";
import Navbar from "../../ui/Navbar/Navbar";

type PublicHeaderProps = {};

const PublicHeader: React.FC<PublicHeaderProps> = () => {
  const items = [
    { key: "0", href: "/", label: "Home" },
    {
      key: "1",
      href: "/about-us",
      label: "About us",
    },
    {
      key: "2",
      href: "/services",
      label: " Service",
    },
    {
      key: "3",
      href: "/blogs",
      label: "Blogs",
    },
    {
      key: "4",
      href: "/contact-us",
      label: "Contact Us",
    },
  ];
  return <Navbar items={items} hasSider />;
};
export default PublicHeader;
