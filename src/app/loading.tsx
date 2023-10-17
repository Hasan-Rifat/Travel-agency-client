import { Spin } from "antd";
import React from "react";

type loadingProps = {};

const loading: React.FC<loadingProps> = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Spin size="large" className="loading" tip="Loading..." />
    </div>
  );
};
export default loading;
