import React from 'react';
import MenuItems from './MenuItems';

const Menu = props => {
  const { menu, addItem } = props;

  const nonEmptyMenuKeys = Object.keys(menu).filter(menuKey => {
    const menuContent = menu[menuKey];
    return menuContent.length > 0;
  });

  return (
    <div className="Menu">
      {nonEmptyMenuKeys.map(menuKey => {
        return <MenuItems key={menuKey} name={menuKey} items={menu[menuKey]} addItem={addItem} />;
      })}
    </div>
  );
};

export default Menu;
