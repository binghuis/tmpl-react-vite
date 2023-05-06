import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme, ThemeConfig } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
const { compactAlgorithm } = theme;
import { Routes } from '@generouted/react-router'

import 'antd/dist/reset.css';
import "./index.css";

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
  </React.StrictMode>
);
