import { type BreadcrumbPlusProps } from '@/components/breadcrumbs-plus';

export const BreadcrumbRoutes: BreadcrumbPlusProps['routes'] = [
  { path: '/', breadcrumb: '首页' },
  { path: '/demo', breadcrumb: 'Demo' },
  { path: '/login', breadcrumb: 'Login' },
];
