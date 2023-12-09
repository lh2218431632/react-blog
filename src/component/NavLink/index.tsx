import React from 'react';
import { route } from '../../interface/index';
import { routes } from '../../config/route';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { NavLink as RouterLink } from 'react-router-dom';
import style from './index.module.scss';
interface Iprops {
  className?: string;
  onNavigation?: any;
}

const NavLink: React.FC<Iprops> = ({ className, onNavigation }) => {
  function generateMenuItems(route: route) {
    const { path, children } = route;
    const menuItem: any = {
      key: path,
      lable: <RouterLink to={path}>{path}</RouterLink>,
      children: [],
    };

    menuItem.children = children.map((item: route) => {
      generateMenuItems(item);
    });

    return menuItem;
  }
  const menuItems: MenuProps['items'] = [];
  let root: route = { ...routes, children: [] };
  menuItems.push(generateMenuItems(root));
  routes.children.map((route: route) => {
    menuItems.push(generateMenuItems(route));
  });
  console.log('menuItems', menuItems);
  return (
    <>
      <Menu
        theme='dark'
        mode='horizontal'
        className={className}
        // defaultSelectedKeys={['2']}
        items={menuItems}
        onClick={(value: any) => {
          onNavigation(value);
        }}
      />
    </>
  );
};

export default NavLink;
