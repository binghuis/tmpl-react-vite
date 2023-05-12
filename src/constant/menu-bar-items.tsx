import Icon from '@/components/icon-font';
import { MenuBarProps } from '@/components/menu-bar';

export const MenuBarItems: MenuBarProps['items'] = [
  {
    label: '首页',
    path: '/',
    icon: <Icon type="dashboard" />,
  },
  {
    label: 'Demo',
    path: '/demo',
    icon: <Icon type="dashboard" />,
  },
];
