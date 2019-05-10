import React from 'react';
import axios from 'axios';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  state = {
    cart: [
      {
        id: '1519055545-88',
        price: 25,
        title: 'Brunch authentique 1 personne',
        amount: 2,
      },
      {
        id: '1519055545-89',
        price: 25,
        title: 'Brunch authentique 1 personne',
        amount: 2,
      },
    ],
    data: null,
  };

  render() {
    return (
      <div>
        <Header restaurant={this.state.data ? this.state.data.restaurant : null} />
        <Content menu={this.state.data ? this.state.data.menu : null} cart={this.state.cart} />
      </div>
    );
  }

  async componentDidMount() {
    const response = await axios.get('https://deliveroo-api.now.sh/menu');
    Object.keys(response.data.menu).forEach(menuKey => {
      response.data.menu[menuKey].forEach(menuItem => {
        menuItem.price = parseInt(menuItem.price, 10);
      });
    });

    this.setState({
      data: response.data,
    });
  }
}

export default App;
