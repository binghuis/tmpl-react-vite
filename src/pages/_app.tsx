import Logo from '@/assets/logo-sm.png';
import BreadcrumbPlus from '@/components/breadcrumbs-plus';
import MenuBar from '@/components/menu-bar';
import ResizePane from '@/components/resize-pane';
import { BreadcrumbRoutes } from '@/constant/breadcrumb-routes';
import { MenuBarItems } from '@/constant/menu-bar-items';
import { PublicPaths } from '@/constant/public-paths';
import iHttp from '@/service/http';
import { useAuthStore } from '@/store/auth';
import { Layout, Watermark } from 'antd';

import { useEffect } from 'react';
import { Outlet, matchPath, useLocation, useNavigate } from 'react-router-dom';

function App() {
  useEffect(() => {
    iHttp.joke();
  }, []);

  const { user } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  if (PublicPaths.some((path) => matchPath(path, location.pathname))) {
    return <Outlet />;
  }

  return (
    <Layout className="w-screen h-screen">
      <Layout.Header className="site-header h-14 p-0 pl-8 pr-2 flex items-center justify-between bg-white">
        <div
          className="w-44 h-full cursor-pointer flex items-center"
          onClick={() => {
            navigate('/');
          }}
        >
          <img src={Logo} width={60} alt="" />
        </div>
      </Layout.Header>
      <Watermark content={`${user.id}`}>
        <Layout className='bg-gray-100'>
          <ResizePane
            leftPane={<MenuBar items={MenuBarItems} />}
            leftPaneClassName=""
            rightPane={
              <Layout className="ml-3 mr-3 mt-2 mb-1 bg-white">
                <Layout.Content className="overflow-y-auto py-1 px-2 min-h-min ">
                  <BreadcrumbPlus routes={BreadcrumbRoutes} />
                  {/* <Divider className='m-0 mt-0.5 mb-1.5' /> */}
                  <Outlet />
                </Layout.Content>
                <Layout.Footer className="text-center text-gray-400 text-xs p-1 bg-gray-50">
                  Made By @binghuis ❤️
                </Layout.Footer>
              </Layout>
            }
            rightPaneClassName="flex flex-col justify-between"
          />
        </Layout>
      </Watermark>
    </Layout>
  );
}

export default App;
