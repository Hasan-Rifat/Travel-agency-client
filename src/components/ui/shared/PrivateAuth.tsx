"use client";

import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React from "react";

type PrivateAuthProps = {
  children?: React.ReactNode;
};

const PrivateAuth: React.FC<PrivateAuthProps> = ({ children }) => {
  const { role } = getUserInfo() as any;
  const router = useRouter();

  if (!role) {
    router.push("/login");
  }

  return children;
};
export default PrivateAuth;
