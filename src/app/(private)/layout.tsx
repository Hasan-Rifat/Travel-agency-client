import Navbar from "@/components/ui/Navbar/Navbar";
import PrivateAuth from "@/components/ui/shared/PrivateAuth";
import { PublicHeaderItem } from "@/constants";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <PrivateAuth>
        <Navbar items={PublicHeaderItem} hasSider />
        {children}
      </PrivateAuth>
    </main>
  );
};

export default layout;
