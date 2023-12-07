import React from "react";
import Navbar from "../../ui/Navbar/Navbar";
import { PublicHeaderItem } from "@/constants";

type PublicHeaderProps = {};

const PublicHeader: React.FC<PublicHeaderProps> = () => {
  return <Navbar items={PublicHeaderItem} hasSider />;
};
export default PublicHeader;
