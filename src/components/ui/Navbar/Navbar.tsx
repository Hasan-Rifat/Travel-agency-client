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
    <header className="layout bg-[#001529]">
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
            <Link href="/" className="!no-underline">
              <p
                className={`m-0 text-white font-bold text-2xl ${
                  hasSider && "text-center lg:text-left"
                }`}
              >
                Travel <span className="text-[#ff7c5b]">Agency</span>
              </p>
            </Link>
          </div>
          <nav className="lg:block hidden">
            <ul
              className=" flex items-center gap-5 "
              // disabledOverflow
              // theme="dark"
              // mode="horizontal"
              // selectedKeys={[pathName]}
            >
              {items?.map((item, i) => (
                <li className="" key={i}>
                  <Link className="no-underline text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}

              {role ? (
                <li className="">
                  <Button
                    type="primary"
                    className="mr-2"
                    onClick={() => {
                      role === "superAdmin"
                        ? router.push(`/super-admin/dashboard`)
                        : router.push(`/${role}/dashboard`);
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button
                    type="primary"
                    className=""
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Log Out
                  </Button>
                </li>
              ) : (
                <li>
                  <Button
                    type="primary"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Sign In / register
                  </Button>
                </li>
              )}
            </ul>
          </nav>

          <Button type="primary" className="lg:hidden" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            visible={open}
          >
            <ul
            /* theme="light"
              mode="vertical"
              selectedKeys={[pathName]}
              style={{ borderRight: 0 }} */
            >
              {items?.map((item, i) => (
                <li key={i}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              {role ? (
                <li className="">
                  <Button
                    type="primary"
                    className="mr-2"
                    onClick={() => {
                      role === "superAdmin"
                        ? router.push(`/super-admin/dashboard`)
                        : router.push(`/${role}/dashboard`);
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button
                    type="primary"
                    className=""
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Log Out
                  </Button>
                </li>
              ) : (
                <li>
                  <Button
                    type="primary"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Sign In / register
                  </Button>
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
