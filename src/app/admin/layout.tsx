import AdminHeader from "@/components/view/Header/AdminHeader";
import AdminSideBar from "@/components/view/SideBar/AdminSideBar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={poppins.className}>
        <AdminHeader />
        <AdminSideBar>{children}</AdminSideBar>
      </main>
    </>
  );
}
