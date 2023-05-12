import { type BreadcrumbPlusProps } from '@/components/breadcrumbs-plus';

/** 面包屑配置 */
export const BreadcrumbRoutes: BreadcrumbPlusProps['routes'] = [
  { path: '/', breadcrumb: '首页' },
  { path: '/demo', breadcrumb: 'Demo' },
  { path: '/login', breadcrumb: 'Login' },
];
