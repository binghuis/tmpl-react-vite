import { type BreadcrumbPlusProps } from '@/components/breadcrumbs-plus';
import { Link } from '@/router';

/** 面包屑配置 */
export const BreadcrumbRoutes: BreadcrumbPlusProps['routes'] = [
  { path: '/', breadcrumb: '首页' },
  { path: '/dynamic', breadcrumb: '动态路由' },
  {
    path: '/dynamic/:id',
    breadcrumb: ({ match }) => {
      const { id = '' } = match.params;
      return (
        <Link to="/dynamic/:id" params={{ id }}>
          {id}
        </Link>
      );
    },
  },
  {
    path: '/dynamic/:id/detail',
    breadcrumb: '动态详情',
  },
  {
    path: '/nested',
    breadcrumb: '嵌套路由',
  },
  {
    path: '/related',
    breadcrumb: '关联路由',
  },
  {
    path: '/nested/nested-1',
    breadcrumb: '嵌套路由-1',
  },
  {
    path: '/nested/nested-1/nested-1-2',
    breadcrumb: '嵌套路由-1-2',
  },
];
