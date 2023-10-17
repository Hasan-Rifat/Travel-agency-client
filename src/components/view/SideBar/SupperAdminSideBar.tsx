import SideBar from "@/components/ui/SideBar/SideBar";
import React from "react";

type SupperAdminSideBarProps = {
  children?: React.ReactNode;
};

const SupperAdminSideBar: React.FC<SupperAdminSideBarProps> = ({
  children,
}) => {
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
export default SupperAdminSideBar;
