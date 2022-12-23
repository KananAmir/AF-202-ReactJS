import React from "react";
import { Space, Spin } from "antd";

const Spinner = () => {
  return (
    <div
      id="spinner"
      style={{ height: "80vh", display: "flex", alignItems: "center" }}
    >
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Spinner;
