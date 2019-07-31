import React from 'react';
import axios from 'axios';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  state = {
    cart: [
      // {
      //   id: '1519055545-88',
      //   price: 25,
      //   title: 'Brunch authentique 1 personne',
      //   amount: 2,
      // },
      // {
      //   id: '1519055545-89',
      //   price: 25,
      //   title: 'Brunch authentique 1 personne',
      //   amount: 2,
      // },
    ],
    data: null,
  };

  addItem = itemId => {
    const exist = this.state.cart.find(cartItem => cartItem.id === itemId);
    if (exist) {
      const index = this.state.cart.indexOf(exist);
      const nextCart = [...this.state.cart];
      nextCart[index] = {
        ...nextCart[index],
        amount: nextCart[index].amount + 1,
      };
      this.setState({ cart: nextCart });
      return;
    } else {
      // add
      // find item in data
      let item = null;
      Object.keys(this.state.data.menu).forEach(menuKey => {
        this.state.data.menu[menuKey].forEach(menuItem => {
          if (menuItem.id === itemId) {
            item = menuItem;
          }
        });
      });
      if (item === null) {
        console.error(`Cannot find item ${itemId}`);
        return;
      }
      const nextCart = [...this.state.cart];
      nextCart.push({
        id: itemId,
        title: item.title,
        price: item.price,
        amount: 1,
      });
      this.setState({ cart: nextCart });
      return;
    }
  };

  removeItem = itemId => {
    const exist = this.state.cart.find(cartItem => cartItem.id === itemId);
    if (!exist) {
      console.error(`Cannot remove iten not in cart !`);
      return;
    }
    const index = this.state.cart.indexOf(exist);
    const nextCart = [...this.state.cart];
    nextCart[index] = {
      ...nextCart[index],
      amount: nextCart[index].amount - 1,
    };
    const cartNotZero = nextCart.filter(cartItem => cartItem.amount > 0);
    this.setState({ cart: cartNotZero });
    return;
  };

  render = () => {
    return (
      <div>
        <Header restaurant={this.state.data ? this.state.data.restaurant : null} />
        <Content
          menu={this.state.data ? this.state.data.menu : null}
          cart={this.state.cart}
          addItem={this.addItem}
          removeItem={this.removeItem}
        />
      </div>
    );
  };

  componentDidMount = async () => {
    const response = await axios.get('https://deliveroo-api.now.sh/menu');
    Object.keys(response.data.menu).forEach(menuKey => {
      response.data.menu[menuKey].forEach(menuItem => {
        menuItem.price = parseInt(menuItem.price, 10);
      });
    });

    this.setState({
      data: response.data,
    });
  };
}

export default App;
