import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const cartItemsList =  [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]

    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItem={cartItemsList}/>
        <CartFooter copyright = {'Your Mom 2017'}/>


      </div>
    );
  }
}

const CartHeader = () => (
  <nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand" href="#">Shopping Cart</a>
  </nav>
)

const CartFooter = ( props ) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">&copy; {props.copyright}</a>
  </nav>
)

const CartItems =  ( props ) => {
  let cartItemsList = props.cartItem.map(item=> <CartItem cartItem={item} />)

  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {cartItemsList}
      </div>
    </div>

    )
  }

  const CartItem = (props) => {
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{props.cartItem.product.name}</div>
          <div className="col-md-2">{props.cartItem.product.priceInCents}</div>
          <div className="col-md-2">{props.cartItem.quantity}</div>
        </div>
      </div>
    )
  }


export default App;
