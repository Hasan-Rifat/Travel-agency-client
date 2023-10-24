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
  const [hydrated, setHydrated] = useState(false);

  const [open, setOpen] = useState(false);
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useAppDispatch();

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
    <Layout className="layout bg-[#001529]">
      <Header className="mx-auto container flex items-center  ">
        <div className="flex items-center gap-5 w-full">
          {hasSider && (
            <Button
              type="primary"
              className="lg:hidden"
              onClick={() => {
                dispatch(showSidebarDrawer());
              }}
            >
              <MenuOutlined />
            </Button>
          )}
          <Content>
            <Link href="/">
              <Title
                className={`m-0 text-white ${
                  hasSider && "text-center lg:text-left"
                }`}
              >
                Travel <span className="text-[#ff7c5b]">Agency</span>
              </Title>
            </Link>
          </Content>
          <Menu
            className="lg:block hidden"
            disabledOverflow
            theme="dark"
            mode="horizontal"
            selectedKeys={[pathName]}
          >
            {items?.map((item, i) => (
              <Menu.Item key={i}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}

            {role ? (
              <Menu.Item className="">
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
              </Menu.Item>
            ) : (
              <Menu.Item>
                <Button
                  type="primary"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Sign In / register
                </Button>
              </Menu.Item>
            )}
          </Menu>

          <Button type="primary" className="lg:hidden" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            visible={open}
          >
            <Menu
              theme="light"
              mode="vertical"
              selectedKeys={[pathName]}
              style={{ borderRight: 0 }}
            >
              {items?.map((item, i) => (
                <Menu.Item key={i}>
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              ))}
              {role ? (
                <Menu.Item className="">
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
                </Menu.Item>
              ) : (
                <Menu.Item>
                  <Button
                    type="primary"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Sign In / register
                  </Button>
                </Menu.Item>
              )}
            </Menu>
          </Drawer>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
