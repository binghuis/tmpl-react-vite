import MenuBar from '@/components/menu-bar';
import { ThemeContext } from '@/context/theme';
import iHttp from '@/service/http';
import { useAuthStore } from '@/store/auth';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Avatar, Dropdown, Layout, Space, Watermark, theme } from 'antd';

import Logo from '@/assets/logo-sm.png';
import BreadcrumbPlus from '@/components/breadcrumbs-plus';
import IconFont from '@/components/icon-font';
import { isPublicPath } from '@/config';
import { BreadcrumbRoutes } from '@/config/breadcrumb';
import { SideMenuItems } from '@/config/side-menu';
import { Navigate } from '@/router';
import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useBoolean } from 'usehooks-ts';

const App = () => {
  useEffect(() => {
    iHttp.joke();
  }, []);
  const { useToken } = theme;

  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const { token } = useToken();
  const collapse = useBoolean();
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const { token: isAuth } = useAuthStore();
  if (!isPublicPath() && !isAuth) {
    return <Navigate to={'/login'} replace />;
  }
  if (isPublicPath()) {
    return <Outlet />;
  }
  const menuIconStyle = css`
    &:hover {
      color: ${token.colorPrimaryHover};
    }
  `;

  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout className="h-screen w-screen">
      <Sider
        width={256}
        style={{
          background: token.colorBgContainer,
          borderRightWidth: 1,
          borderRightColor: token.colorBorderSecondary,
        }}
        className="px-2"
        trigger={null}
        collapsible
        collapsed={collapse.value}
      >
        <div className="flex h-screen flex-col justify-between">
          <div
            className={'flex h-12 cursor-pointer items-center pl-2'}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: token.colorBorderSecondary,
            }}
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={Logo} height={48} width={48} alt="" />
            {!collapse.value && (
              <span
                className="ml-1 whitespace-nowrap text-lg"
                style={{ color: token.colorTextHeading }}
              >
                测试项目模板看看
              </span>
            )}
          </div>
          <div className="flex-grow">
            <MenuBar items={SideMenuItems} className="border-r-0" />
          </div>
          <div
            onClick={collapse.toggle}
            className="flex cursor-pointer justify-center pb-4 pt-2"
            style={{
              borderTopWidth: 1,
              borderTopColor: token.colorBorderSecondary,
              color: token.colorIcon,
            }}
          >
            {collapse.value ? (
              <MenuUnfoldOutlined css={menuIconStyle} />
            ) : (
              <MenuFoldOutlined css={menuIconStyle} />
            )}
          </div>
        </div>
      </Sider>

      <Layout className="flex h-full flex-col">
        <Header
          className="relative flex h-12 items-center justify-end pl-2 pr-4"
          style={{
            background: token.colorBgContainer,
            borderBottomWidth: 1,
            borderBottomColor: token.colorBorderSecondary,
          }}
        >
          <Space className="mr-12">
            <div
              onClick={toggleTheme}
              className="flex cursor-pointer opacity-60 duration-300 hover:opacity-95"
            >
              {isDark ? (
                <IconFont type="sun" size={18} />
              ) : (
                <IconFont type="moon_stars_fill" size={20} />
              )}
            </div>
          </Space>
          <Dropdown
            className="h-full items-center"
            placement="bottomLeft"
            menu={{
              items: [
                {
                  label: (
                    <Space>
                      <PoweroffOutlined
                        onClick={() => {
                          logout();
                        }}
                      />
                      退出登录
                    </Space>
                  ),
                  key: '0',
                },
              ],
            }}
          >
            <Space className="h-full cursor-pointer">
              <Avatar size={'small'} src={user?.avatar}>
                {user?.name.charAt(0).toLocaleUpperCase()}
              </Avatar>
              {user?.name}
            </Space>
          </Dropdown>
        </Header>
        <Content className="flex-grow px-2 py-1" style={{ color: token.colorText }}>
          <BreadcrumbPlus routes={BreadcrumbRoutes} />
          <Watermark className="h-full" content={`${user?.id}`}>
            <Outlet />
          </Watermark>
        </Content>
        <Footer className="p-1 text-center text-xs text-gray-400">Made with ❤️ by @binghuis</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
