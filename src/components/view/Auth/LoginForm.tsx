"use client";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useLoginMutation } from "@/redux/api/user/userApiSlice";
import { useRouter } from "next/navigation";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { useAppDispatch } from "@/redux/hooks";
import { setToLocalStorage } from "@/utils/local-storage";
import { getUser } from "@/redux/api/user/userSlice";
import { userKey } from "@/constants/storageKey";
import toast from "react-hot-toast";
import { useEffect } from "react";

const LoginForm = () => {
  const [login, { isLoading, data, error }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    // Handle login state here with isSuccess, isError, error, isLoading

    if (error) {
      if ("message" in error && error.message) {
        toast.error(error.message, {
          id: "login-error",
        });
      }
    }

    if (isLoading) {
      toast.loading("Loading...", {
        id: "login-loading",
      });
    }

    return () => {
      toast.dismiss("login-success");
      toast.dismiss("login-error");
      toast.dismiss("login-loading");
    };
  }, [data, error, isLoading]);

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const res = await login({ ...values }).unwrap();
      dispatch(getUser(res?.user));
      if (res?.user) {
        res?.user?.role === "superAdmin"
          ? router.push(`/super-admin/dashboard`)
          : router.push(`/${res?.user?.role}/dashboard`);

        message.success("User logged in successfully!");
      }
      storeUserInfo({ accessToken: res?.token });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[93vh] bg-gray-100">
      <div className="w-full max-w-sm">
        <Form
          name="normal_login"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not a valid email!",
              },
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              className="mb-4"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="mb-4"
            />
          </Form.Item>

          <Form.Item className="text-center">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
            >
              Log in
            </Button>
            <p className="text-gray-600 text-xs">
              Or{" "}
              <Link href="/register">
                <span className="text-blue-500">register now!</span>
              </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
