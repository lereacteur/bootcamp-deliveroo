import React from 'react';
import Cart from './Cart';
import Menu from './Menu';
import MenuLoader from './MenuLoader';

const Content = props => {
  const { menu, cart } = props;
  return (
    <div className="Content">
      <div className="Content--center">
        {menu === null ? <MenuLoader /> : <Menu menu={menu} />}
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Content;
