import { Path } from '@/router';
import { Menu, MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useEffect, useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';

interface ItemBase {
  icon?: React.ReactNode;
  label: string;
}

/** 叶子节点可以关联其他路径 */
interface LeafItem extends ItemBase {
  path?: Path;
  related?: Path[];
}

/** 内部节点不跳转，不传 path */
interface InternalItem extends ItemBase {
  key: string;
  children: Item[];
}

type Item = InternalItem | LeafItem;

export interface MenuBarProps
  extends Omit<MenuProps, 'items' | 'selectedKeys' | 'openKeys' | 'onOpenChange'> {
  items: Item[];
}

const INDEX = '/';

const MenuBar: React.FunctionComponent<MenuBarProps> = (props) => {
  const { items, mode = 'inline', ...restProps } = props;
  const [selectedKey, setSelectedKey] = useState<string>(INDEX);
  const [openKeys, setOpenKeys] = useState<string[]>();

  const { pathname } = useLocation();

  const findItem = (item: Item, itemsTemp: Item[]) => {
    let match;

    // 处理叶子节点
    if ('path' in item && item.path) {
      const { path, related } = item;

      const paths = related ? [path, ...related] : [path];
      // 当前页面 pathname 是否与当前 menu paths 匹配
      match = paths.some((path) => matchPath(path, pathname));
    }

    // 收集处理过的 item
    itemsTemp.push(item);

    if (match) {
      // 匹配项为真则表示 itemsTemp 最后一项为叶子节点
      const lastItem = itemsTemp[itemsTemp.length - 1] as LeafItem;
      // 更新 selectedKey
      if (lastItem.path) {
        setSelectedKey(lastItem.path);
      }
      // itemsTemp 叶子节点之前的节点都为内部节点，更新 openKeys
      if (itemsTemp.length > 1) {
        const openKeys = itemsTemp.slice(0, -1).map((item) => (item as InternalItem).key);

        setOpenKeys(openKeys);
      }
    }

    // 如果当前 Item 没有匹配项则继续匹配其 children
    if ('children' in item) {
      item.children.forEach((child) => findItem(child, itemsTemp));
    }
  };

  useEffect(() => {
    items.forEach((item) => findItem(item, []));
  }, [pathname]);

  /** 将 Item[] 转换成 MenuItem[] */
  const convertItem2MenuItem = (items: Item[]): NonNullable<ItemType>[] => {
    return items.map((item) => {
      const { label, icon } = item;

      let children = null;
      let key = '';
      let path = '';
      /** 判断叶子节点 */
      if ('path' in item && item.path) {
        key = item.path;
        path = item.path;
      }
      /** 判断内部节点 */
      if ('key' in item) {
        key = item.key;
        children = item.children;
      }

      const menuItem: NonNullable<ItemType> & {
        children?: NonNullable<ItemType>[];
      } = {
        // 只有叶子节点有路由跳转
        label: path ? <Link to={path}>{label}</Link> : label,
        key: key,
        title: label,
        icon: icon,
      };

      if (children) {
        menuItem.children = convertItem2MenuItem(children);
      }

      return menuItem;
    });
  };

  const menuItems = convertItem2MenuItem(items);

  return (
    <Menu
      {...restProps}
      mode={mode}
      selectedKeys={[selectedKey]}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      items={menuItems}
    />
  );
};

export default MenuBar;
