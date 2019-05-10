import React from 'react';
import MenuItem from './MenuItem';

const MenuItems = props => {
  const { name, items } = props;
  return (
    <div className="MenuItems">
      <h2>{name}</h2>
      <div className="MenuItems--items">
        {items.map(item => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default MenuItems;
