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
    label: 'Demo',
    path: '/demo',
    icon: <IconFont type="dashboard" />,
  },
];
