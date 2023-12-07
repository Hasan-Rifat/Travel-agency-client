import React from "react";
import Navbar from "../../ui/Navbar/Navbar";
import { UserHeaderItem } from "@/constants";

type UserHeaderProps = {};

const UserHeader: React.FC<UserHeaderProps> = () => {
  return <Navbar items={UserHeaderItem} hasSider />;
};
export default UserHeader;
