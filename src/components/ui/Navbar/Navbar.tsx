"use client";
import React, { useState } from "react";
import { Breadcrumb, Button, Drawer, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Title from "antd/es/typography/Title";
import { MenuOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/redux/hooks";
import { showSidebarDrawer } from "@/redux/slice/sideBarSlice";

const { Header, Content, Footer } = Layout;

const Navbar = ({
  items,
}: {
  items: { key: string; label: string; href: string }[];
}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  return (
    <Layout className="layout">
      <Header className="flex justify-between items-center">
        <Content className="flex gap-4">
          <Button
            type="primary"
            className="lg:hidden"
            onClick={() => dispatch(showSidebarDrawer())}
          >
            <MenuOutlined />
          </Button>
          <Link href="/">
            <Title level={3} className="text-white mb-0">
              Travel agency
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[items.find((item) => item.href === pathName)?.key!]}
        >
          {items.map((item) => (
            <Menu.Item key={item.key}>
              <Link className="text-white" href={item.href}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        <Button onClick={showDrawer} type="primary" className="lg:hidden">
          <MenuOutlined />
        </Button>
        <Drawer
          className="lg:hidden block "
          title="Menu"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Menu
            disabledOverflow
            theme="light"
            mode="vertical"
            selectedKeys={[items.find((item) => item.href === pathName)?.key!]}
          >
            {items.map((item) => (
              <Menu.Item key={item.key}>
                <Link className="text-blue-700" href={item.href}>
                  {item.label}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
