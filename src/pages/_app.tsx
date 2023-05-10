import Logo from '@/assets/logo-sm.png';
import BreadcrumbPlus from '@/components/breadcrumbs-plus';
import Icon from '@/components/icon';
import MenuBar from '@/components/menu-bar';
import { BreadcrumbRoutes } from '@/constant/breadcrumb-routes';
import { MenuBarItems } from '@/constant/menu-bar-items';
import { PublicPaths } from '@/constant/public-paths';
import { ThemeContext } from '@/context/theme';
import useBoolean from '@/hooks/use-boolean';
import iHttp from '@/service/http';
import { useAuthStore } from '@/store/auth';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Watermark, theme } from 'antd';

import { useContext, useEffect } from 'react';
import { Outlet, matchPath, useLocation, useNavigate } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    iHttp.joke();
  }, []);
  const { useToken } = theme;

  const { user } = useAuthStore();
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
    <Layout className="w-screen h-screen">
      <Sider
        width={256}
        style={{
          background: token.colorBgContainer,
          borderRightWidth: 1,
          borderRightColor: token.colorBorderSecondary,
        }}
        className='px-2'
        trigger={null}
        collapsible
        collapsed={collapse.state}
      >
        <div className='flex flex-col h-full'>
          <div
            className={'h-12 cursor-pointer flex items-center pl-2'}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: token.colorBorderSecondary,
            }}
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={Logo} className='h-full' alt="" />
            {!collapse.state && (
              <span
                className='text-lg'
                style={{ color: token.colorTextHeading }}
              >
                Antd
              </span>
            )}
          </div>
          <div className='flex-grow'>
            <MenuBar items={MenuBarItems} className='border-r-0' />
          </div>
          <div
            onClick={collapse.toggle}
            className='cursor-pointer flex justify-center pt-2 pb-4'
            style={{
              borderTopWidth: 1,
              borderTopColor: token.colorBorderSecondary,
              color: token.colorIcon,
            }}
          >
            {collapse.state ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </div>
      </Sider>

      <Layout>
        <Header
          className="h-12 flex items-center px-2 justify-end"
          style={{
            background: token.colorBgContainer,
            borderBottomWidth: 1,
            borderBottomColor: token.colorBorderSecondary,
          }}
        >
          <div
            onClick={toggleTheme}
            className='cursor-pointer opacity-60 hover:opacity-95 duration-300 flex'
          >
            {isDark ? (
              <Icon type='sun' size={20} />
            ) : (
              <Icon type='moon_stars_fill' size={22} />
            )}
          </div>
        </Header>
        <Content className="overflow-y-auto py-1 px-2 min-h-min">
          <Watermark content={`${user?.id}`}>
            <BreadcrumbPlus routes={BreadcrumbRoutes} />
            <Outlet />
          </Watermark>
        </Content>
        <Footer className="text-center text-gray-400 text-xs p-1">
          Made with ❤️ by @binghuis
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
