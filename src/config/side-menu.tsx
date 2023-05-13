import IconFont from '@/components/icon-font';
import { MenuBarProps } from '@/components/menu-bar';

/** 侧边栏菜单配置 */
export const SideMenuItems: MenuBarProps['items'] = [
  {
    label: '首页',
    path: '/',
    icon: <IconFont type="dashboard" />,
  },
  {
    label: '嵌套路由',
    path: '/nested',
    icon: <IconFont type="dashboard" />,
  },
  {
    label: '嵌套路由-1',
    key: 'nested-1',
    icon: <IconFont type="dashboard" />,
    children: [
      {
        label: '嵌套路由-1',
        path: '/nested/nested-1',
        icon: <IconFont type="dashboard" />,
      },
      {
        label: '嵌套路由-1-1',
        path: '/nested/nested-1/nested-1-1',
        icon: <IconFont type="dashboard" />,
      },
    ],
  },
  {
    label: '动态路由',
    path: '/dynamic',
    icon: <IconFont type="dashboard" />,
    related: ['/related'],
  },
];
