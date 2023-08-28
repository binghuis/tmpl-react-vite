import { blue } from '@ant-design/colors';
import { StyleProvider } from '@ant-design/cssinjs';
import { Routes } from '@generouted/react-router';
import { App as AntdApp, ConfigProvider, ThemeConfig } from 'antd';
import 'antd/dist/reset.css';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AntdStatic from './components/antd-static';
import ThemeProvider, { ThemeContext } from './context/theme';
import './index.css';
dayjs.locale('zh-cn');

const defaultData: ThemeData = {
  borderRadius: 2,
  colorPrimary: blue[4],
};

const themeConfig: ThemeConfig = {
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
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ConfigProvider
            locale={zhCN}
            theme={{
              ...themeConfig,
              algorithm: [theme],
            }}
          >
            <StyleProvider hashPriority="high">
              <AntdApp>
                <Routes />
                <AntdStatic />
              </AntdApp>
            </StyleProvider>
          </ConfigProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  </React.StrictMode>,
);
