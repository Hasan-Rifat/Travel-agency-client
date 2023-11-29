"use client";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  if (!role) {
    router.push("/login");
  }

  return <>{children}</>;
};

export default Layout;
