import Logo from '@/assets/react.svg';
import BreadcrumbPlus from '@/components/breadcrumbs-plus';
import MenuBar from '@/components/menu-bar';
import ResizePane from '@/components/resize-pane';
import { BreadcrumbRoutes } from '@/constant/breadcrumb-routes';
import { MenuBarItems } from '@/constant/menu-bar-items';
import iHttp from '@/service/http';
import { useAuthStore } from '@/store/auth';
import { Divider, Image, Layout, Watermark } from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  useEffect(() => {
    iHttp.joke();
  }, []);

  const { user } = useAuthStore();
  const location = useLocation();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location]);

  return (
    <Layout className="w-screen h-screen">
      <Layout.Header className="site-header h-14 p-0 pl-8 pr-2 flex items-center justify-between bg-white">
        <div
          className="w-44 h-full cursor-pointer flex items-center"
          // onClick={() => {}}
        >
          <Image src={Logo} width="80" preview={false} />
        </div>
      </Layout.Header>
      <Watermark content={`${user.id}`}>
        <Layout className='bg-gray-100'>
          <ResizePane
            leftPane={
              <Layout.Sider>
                <MenuBar items={MenuBarItems} />
              </Layout.Sider>
            }
            leftPaneClassName=""
            rightPane={
              <Layout className="ml-3 mr-3 mt-2 mb-1 bg-white">
                <Layout.Content className="overflow-y-auto p-2 min-h-min ">
                  <BreadcrumbPlus routes={BreadcrumbRoutes} />
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
