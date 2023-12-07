"use client";

import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type PrivateAuthProps = {
  children?: React.ReactNode;
};

const PrivateAuth: React.FC<PrivateAuthProps> = ({ children }) => {
  const router = useRouter();

  const { role } = getUserInfo() as any;

  // prevent hydration error
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  if (typeof window === "undefined") {
    return "";
  }
  if (!role) {
    router.push("/login");
  }

  return children;
};
export default PrivateAuth;
