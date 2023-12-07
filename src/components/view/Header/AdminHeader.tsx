import React from "react";
import Navbar from "../../ui/Navbar/Navbar";
import { AdminHeaderItem } from "@/constants";

type AdminHeaderProps = {};

const AdminHeader: React.FC<AdminHeaderProps> = () => {
  return <Navbar items={AdminHeaderItem} hasSider />;
};
export default AdminHeader;
