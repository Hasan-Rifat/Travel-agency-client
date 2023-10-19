"use client";
import React, { useState } from "react";
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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const pathName = usePathname();
  const dispatch = useAppDispatch();

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
                Travel agency
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
            {items?.map((item) => (
              <Menu.Item key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}

            {role ? (
              <Button
                type="primary"
                onClick={() => {
                  signOut();
                }}
              >
                Sign Out
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Sign In / register
              </Button>
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
              {items?.map((item) => (
                <Menu.Item key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Drawer>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
