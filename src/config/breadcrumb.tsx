import { type BreadcrumbPlusProps } from '@/components/breadcrumbs-plus';
import { Link, Path } from '@/router';
import { HomeOutlined } from '@ant-design/icons';
import { matchPath, useMatches } from 'react-router-dom';

/** 用于判断动态路由 path 是否是当前活动路由，进一步决定面包屑是渲染为文本还是 link */
const isLast = (path: Path) => {
  const matches = useMatches();
  const lastPathname = matches[matches.length - 1].pathname;
  const isLast = !!matchPath(path, lastPathname);
  return isLast;
};

/** 面包屑配置 */
export const BreadcrumbRoutes: BreadcrumbPlusProps['routes'] = [
  {
    path: '/',
    breadcrumb: () => (
      <Link to="/">
        <HomeOutlined />
      </Link>
    ),
  },
  { path: '/dynamic', breadcrumb: '动态路由' },
  {
    path: '/dynamic/:id',
    breadcrumb: (props) => {
      const { match } = props;
      const { id = '' } = match.params;
      return (
        <div>
          {isLast('/dynamic/:id') ? (
            id
          ) : (
            <Link to="/dynamic/:id" params={{ id }}>
              {id}
            </Link>
          )}
        </div>
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
    path: '/nested/nested-1/nested-1-1',
    breadcrumb: '嵌套路由-1-1',
  },
];
