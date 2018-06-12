import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './Shop.css';
import Order from "../../components/Order/Order";
import Menu from "../../components/Menu/Menu";

class Shop extends Component {
    state = {
        orders: []
    };

    products = [
        {name: 'Hamburger',
            price: 80,
            id: 1},
        {name: 'Cheeseburger',
            price: 90,
            id: 2},
        {name: 'Fries',
            price: 40,
            id: 3},
        {name: 'Tea',
            price: 50,
            id: 4},
        {name: 'Coffee',
            price: 70,
            id: 5},
        {name: 'Cola',
            price: 30,
            id: 6}
        ];

    addToOrder = (name, price) => {
        let orders = [...this.state.orders];

        const index = this.state.orders.findIndex(order => order.name === name);
        if (index === -1) {
            let order = {name: name, price: price, count: 1};
            orders.push(order)
        } else {
            let order = {...this.state.orders[index]};
            order.count++;
            orders[index] = order;
            console.log(orders[index])
        }
        this.setState({orders});
    };
    removeOrder = (name) => {
        let orders = [...this.state.orders];
        const index = this.state.orders.findIndex(order => order.name === name);
        console.log(index);
        orders.splice(orders[index]);
        this.setState({orders});

    };

  render() {
    return (
      <div className="Shop">
          <h1 className="caption_shop">Бир <i className="empty_tag"></i> <span className="bir_eki">1/2</span> Эки</h1>
          <div className="round_a_day">24/7</div>
          <div className="container">
              <Order orders = {this.state.orders} removeOrder = {this.removeOrder}/>
              <Menu products = {this.products} addToOrder={this.addToOrder}/>
          </div>
      </div>
    );
  }
}

export default Shop;
