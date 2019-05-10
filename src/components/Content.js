import React from 'react';
import Cart from './Cart';
import Menu from './Menu';
import MenuLoader from './MenuLoader';

const Content = props => {
  const { menu, cart, addItem, removeItem } = props;
  return (
    <div className="Content">
      <div className="Content--center">
        {menu === null ? <MenuLoader /> : <Menu menu={menu} addItem={addItem} />}
        <Cart cart={cart} addItem={addItem} removeItem={removeItem} />
      </div>
    </div>
  );
};

export default Content;
