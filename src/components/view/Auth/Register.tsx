"use client";
import { Form, Input, Button, Upload, message } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useRegisterMutation } from "@/redux/api/user/userApiSlice";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [register] = useRegisterMutation();
  const router = useRouter();
  const normFile = (e: { fileList: any }) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e.fileList;
  };
  const onFinish = async (data: any) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const url = data.imageUrl[0].thumbUrl;
    const role = "user";

    try {
      const res = await register({ email, password, name, url, role }).unwrap();
      console.log(res);
      if (res) {
        router.push("/dashboard");
        message.success("User create in successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
    // You can now access all the form values in the 'data' object
  };
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
      onFinish={onFinish} // Set the onFinish callback
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter your name.",
          },
        ]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            message: "Please enter a valid email.",
          },
          {
            required: true,
            message: "Please enter your email.",
          },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your password.",
          },
        ]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <Form.Item
        label="Image Upload"
        name="imageUrl"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          {
            required: true,
            message: "Please upload an image.",
          },
        ]}
      >
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
