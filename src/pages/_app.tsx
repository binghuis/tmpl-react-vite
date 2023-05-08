import Logo from '@/assets/react.svg';
import BreadcrumbsPlus from '@/components/breadcrumbs-plus';
import MenuBar from '@/components/menu-bar';
import ResizePane from '@/components/resize-pane';
import TopProgress from '@/components/top-progress';
import iHttp from '@/service/http';
import { useAuthStore } from '@/store/auth';
import { Divider, Image, Layout, Watermark } from 'antd';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  useEffect(() => {
    iHttp.joke();
  }, []);

  const { token, user } = useAuthStore();

  return (
    <Layout className="w-screen h-screen ">
      <Layout.Header className="site-header h-14 p-0 pl-8 pr-2 flex items-center justify-between bg-white">
        <div
          className="w-44 h-full cursor-pointer flex items-center"
          // onClick={() => {}}
        >
          <Image src={Logo} width="80" preview={false} />
        </div>
      </Layout.Header>
      <Watermark content={`${user.id}`}>
        <Layout className='bg-gray-50'>
          <ResizePane
            leftPane={
              <Layout.Sider width={'100%'}>
                <MenuBar
                  items={[
                    {
                      label: 'home',
                      path: '/',
                    },
                    {
                      label: 'Demo',
                      path: '/demo',
                    },
                    {
                      label: 'Login',
                      path: '/login',
                    },
                  ]}
                />
              </Layout.Sider>
            }
            leftPaneClassName=""
            rightPane={
              <Layout className="ml-3 mr-3 mt-2 mb-1 bg-white">
                <Layout.Content className="overflow-y-auto p-2 min-h-min ">
                  <BreadcrumbsPlus
                    routes={[
                      { path: '/', breadcrumb: '首页' },
                      { path: '/demo', breadcrumb: 'Demo' },
                      { path: '/login', breadcrumb: 'Login' },
                    ]}
                  />
                  <TopProgress>
                    <Outlet />
                  </TopProgress>
                </Layout.Content>
                <Layout.Footer className="text-center text-gray-300 text-xs p-1">
                  Footer
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
