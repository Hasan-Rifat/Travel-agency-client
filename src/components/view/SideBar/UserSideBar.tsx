import SideBar from "@/components/ui/SideBar/SideBar";
import React from "react";

type UserSideBarProps = {
  children?: React.ReactNode;
};

const UserSideBar: React.FC<UserSideBarProps> = ({ children }) => {
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
  return <SideBar items={items}>{children}</SideBar>;
};
export default UserSideBar;
