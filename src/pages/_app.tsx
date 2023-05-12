import Logo from '@/assets/logo-sm.png';
import BreadcrumbPlus from '@/components/breadcrumbs-plus';
import Icon from '@/components/icon';
import MenuBar from '@/components/menu-bar';
import { BreadcrumbRoutes } from '@/constant/breadcrumb-routes';
import { MenuBarItems } from '@/constant/menu-bar-items';
import { PublicPaths } from '@/constant/public-paths';
import { ThemeContext } from '@/context/theme';
import iHttp from '@/service/http';
import { useAuthStore } from '@/store/auth';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Avatar, Dropdown, Layout, Space, Watermark, theme } from 'antd';

import { useContext, useEffect } from 'react';
import { Outlet, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { useBoolean } from 'usehooks-ts';
const App = () => {
  useEffect(() => {
    iHttp.joke();
  }, []);
  const { useToken } = theme;

  const { user, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useToken();
  const collapse = useBoolean();
  const { toggleTheme, isDark } = useContext(ThemeContext);

  if (PublicPaths.some((path) => matchPath(path, location.pathname))) {
    return <Outlet />;
  }
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
        <div className="flex h-full flex-col">
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
            <MenuBar items={MenuBarItems} className="border-r-0" />
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
              <MenuUnfoldOutlined
                css={css`
                  &:hover {
                    color: ${token.colorPrimaryHover};
                  }
                `}
              />
            ) : (
              <MenuFoldOutlined
                css={css`
                  &:hover {
                    color: ${token.colorPrimaryHover};
                  }
                `}
              />
            )}
          </div>
        </div>
      </Sider>

      <Layout>
        <Header
          className="relative flex h-12 items-center justify-end pl-2 pr-4"
          style={{
            background: token.colorBgContainer,
            borderBottomWidth: 1,
            borderBottomColor: token.colorBorderSecondary,
          }}
        >
          <Space className="mr-24">
            <div
              onClick={toggleTheme}
              className="flex cursor-pointer opacity-60 duration-300 hover:opacity-95"
            >
              {isDark ? <Icon type="sun" size={18} /> : <Icon type="moon_stars_fill" size={20} />}
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
              <Avatar size={'small'}>{user?.name.charAt(0).toLocaleUpperCase()}</Avatar>
              {user?.name}
            </Space>
          </Dropdown>
        </Header>
        <Content className="min-h-min overflow-y-auto px-2 py-1">
          <Watermark content={`${user?.id}`}>
            <BreadcrumbPlus routes={BreadcrumbRoutes} />
            <Outlet />
          </Watermark>
        </Content>
        <Footer className="p-1 text-center text-xs text-gray-400">Made with ❤️ by @binghuis</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
