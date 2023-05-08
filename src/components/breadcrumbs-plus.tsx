import { Path } from '@/router';
import { Breadcrumb, Divider } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { BreadcrumbComponentType } from 'use-react-router-breadcrumbs/dist/index';

interface BreadcrumbsPlusProps {
  routes: { path: Path; breadcrumb: string | BreadcrumbComponentType }[];
}
function itemRender(
  item: ItemType,
  params: Record<string, unknown>,
  items: ItemType[],
  paths: string[],
) {
  const last = items.indexOf(item) === items.length - 1;
  return last ? (
    <span>{item.title}</span>
  ) : (
    <Link to={paths.join('/')}>{item.title}</Link>
  );
}

const BreadcrumbsPlus = (props: BreadcrumbsPlusProps) => {
  const { routes } = props;
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });

  const renderBreadcrumbs = () => {
    if (!breadcrumbs || breadcrumbs.length < 2) {
      return null;
    }
    return (
      <Breadcrumb
        itemRender={itemRender}
        items={breadcrumbs.map(({ match, breadcrumb }, i) => {
          return { title: breadcrumb, path: match.pathname };
        })}
      />
    );
  };

  return <>{renderBreadcrumbs()}</>;
};

export default BreadcrumbsPlus;
