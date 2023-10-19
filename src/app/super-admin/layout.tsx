"use client";
import SupperAdminHeader from "@/components/view/Header/SupperAdminHeader";
import SupperAdminSideBar from "@/components/view/SideBar/SupperAdminSideBar";
import { useAppSelector } from "@/redux/hooks";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { Row, Space, Spin } from "antd";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (role !== "superAdmin") {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, role]);

  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }
  return (
    <>
      <main className={poppins.className}>
        <SupperAdminHeader />
        <SupperAdminSideBar>{children}</SupperAdminSideBar>
      </main>
    </>
  );
}