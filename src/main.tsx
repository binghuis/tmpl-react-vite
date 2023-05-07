import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider, ThemeConfig, theme } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
const { compactAlgorithm } = theme;
import { Routes } from "@generouted/react-router";

import "./index.css";
import "antd/dist/reset.css";

const themeConfig: ThemeConfig = {
  algorithm: [compactAlgorithm],
  token: {},
  components: {
    Button: {},
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <ConfigProvider theme={themeConfig}>
        <Routes />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>,
);
