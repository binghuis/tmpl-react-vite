import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, ThemeConfig, theme } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
const { compactAlgorithm } = theme;
import { blue } from '@ant-design/colors';
import { Routes } from '@generouted/react-router';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

import './index.css';
import 'antd/dist/reset.css';

const defaultData: ThemeData = {
  borderRadius: 2,
  colorPrimary: blue[4],
};

const themeConfig: ThemeConfig = {
  algorithm: [],
  token: {
    colorPrimary: defaultData.colorPrimary,
    borderRadius: defaultData.borderRadius,
  },
};

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <ConfigProvider locale={zhCN} theme={themeConfig}>
        <Routes />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>,
);
