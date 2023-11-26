import { Spin } from "antd";
import React from "react";

type LoadingProps = {};

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Spin size="large" className="loading" tip="Loading..." />
    </div>
  );
};
export default Loading;
