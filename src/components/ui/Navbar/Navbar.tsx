"use client";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Drawer, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Title from "antd/es/typography/Title";
import { MenuOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/redux/hooks";
import { showSidebarDrawer } from "@/redux/slice/sideBarSlice";
import { getUserInfo } from "@/services/auth.service";

const { Header, Content, Footer } = Layout;

const Navbar = ({
  items,
  hasSider,
}: {
  items: { key: string; label: string; href: string }[];
  hasSider?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useAppDispatch();

  // prevent hydration error
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const signOut = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <header className="layout bg-[#fff] sticky top-0 z-50 backdrop-blur-2xl ">
      <div className="mx-auto container flex items-center  p-5">
        <div className="flex items-center gap-5 w-full justify-between">
          {hasSider && (
            <button
              className="lg:hidden bg-[#ff7c5b] text-white px-4 py-2 rounded"
              onClick={() => {
                dispatch(showSidebarDrawer());
              }}
            >
              <MenuOutlined />
            </button>
          )}
          <div>
            <p
              className={`m-0 font-bold text-2xl ${
                hasSider && "text-center lg:text-left"
              }`}
            >
              <Link href="/" className="!no-underline text-[#001337] ">
                Travel <span className="text-[#ff7c5b]">Agency</span>{" "}
              </Link>
            </p>
          </div>
          <nav className="lg:block hidden">
            <ul className=" flex items-center gap-5 list-none ">
              {items?.map((item, i) => (
                <li
                  className=" 

                "
                  key={i}
                >
                  <Link
                    className="cursor-pointer no-underline text-[#001337]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {role ? (
                <li className="cursor-pointer">
                  <Link
                    className="cursor-pointer no-underline  mr-2 px-5 py-2 text-white rounded  bg-[#ff7c5b] shadow-custom border-none"
                    href={`${`/${role}/dashboard`}`}
                  >
                    Dashboard
                  </Link>

                  <button
                    className="mr-2 px-5 py-2 text-white rounded  bg-[#ff7c5b] shadow-custom border-none "
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    className="cursor-pointer no-underline mr-2 px-5 py-2 text-white rounded  bg-[#ff7c5b] shadow-custom border-none "
                    href="/login"
                  >
                    Sign In / register
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <button className="lg:hidden" onClick={showDrawer}>
            <MenuOutlined />
          </button>
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            visible={open}
          >
            <ul className="">
              {items?.map((item, i) => (
                <li key={i}>
                  <Link
                    className="cursor-pointer text-[#001337]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {role ? (
                <li className="cursor-pointer">
                  <Link
                    className="cursor-pointer no-underline text-white mr-2 px-5 py-2  rounded  bg-[#ff7c5b] shadow-custom border-none "
                    href={`${`/${role}/dashboard`}`}
                  >
                    <button className="">Dashboard</button>
                  </Link>
                  <button
                    className="mr-2 px-5 py-2 text-white rounded  bg-[#ff7c5b] shadow-custom border-none "
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    className="cursor-pointer no-underline mr-2 px-5 py-2 text-white rounded  bg-[#ff7c5b] shadow-custom border-none "
                    href="/login"
                  >
                    Sign In / register
                  </Link>
                </li>
              )}
            </ul>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
