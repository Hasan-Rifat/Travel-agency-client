"use client";
import UserHeader from "@/components/view/Header/UserHeader";
import UserSideBar from "@/components/view/SideBar/UserSideBar";
import { getUserInfo } from "@/services/auth.service";
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
  const router = useRouter();
  const { role } = getUserInfo() as any;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (role !== "user") {
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
        <UserHeader />
        <UserSideBar>{children}</UserSideBar>
      </main>
    </>
  );
}
