import { Path } from '@/router';
import { Breadcrumb } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { BreadcrumbComponentType } from 'use-react-router-breadcrumbs/dist/index';

export interface BreadcrumbPlusProps {
  routes: { path: Path; breadcrumb: string | BreadcrumbComponentType }[];
}

const itemRender = (
  item: ItemType,
  params: Record<string, unknown>,
  items: ItemType[],
  paths: string[],
) => {
  if (item?.title && typeof item?.title === 'object' && 'props' in item?.title) {
    const { match, children } = item.title.props;
    if (match) {
      return item.title;
    }
    if (children) {
      const last = items.indexOf(item) === items.length - 1;
      return last ? (
        <span>{item.title}</span>
      ) : (
        <NavLink to={paths[paths.length - 1]}>{item.title}</NavLink>
      );
    }
  }
};

const BreadcrumbPlus = (props: BreadcrumbPlusProps) => {
  const { routes } = props;

  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true, excludePaths: [] });

  const renderBreadcrumbs = () => {
    if (breadcrumbs && breadcrumbs.length < 2) {
      return null;
    }

    return (
      <Breadcrumb
        itemRender={itemRender}
        items={breadcrumbs.map(({ match, breadcrumb }, i) => {
          return {
            title: breadcrumb,
            path: match.pathname,
          };
        })}
      />
    );
  };

  return <>{renderBreadcrumbs()}</>;
};

export default BreadcrumbPlus;
