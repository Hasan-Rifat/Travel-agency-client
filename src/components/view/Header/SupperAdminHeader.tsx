import React from "react";
import Navbar from "../../ui/Navbar/Navbar";
import { SupperAdminHeaderItem } from "@/constants";

type SupperAdminHeaderProps = {};

const SupperAdminHeader: React.FC<SupperAdminHeaderProps> = () => {
  return <Navbar items={SupperAdminHeaderItem} hasSider />;
};
export default SupperAdminHeader;
