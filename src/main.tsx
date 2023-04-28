import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme, ThemeConfig } from "antd";
import App from "./App";
import { StyleProvider } from "@ant-design/cssinjs";
const { compactAlgorithm } = theme;

import 'antd/dist/reset.css';
import "./index.css";

const themeConfig: ThemeConfig = {
  algorithm: [],
  token: {},
  components: {
    Button: {},
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <ConfigProvider theme={themeConfig}>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>
);
