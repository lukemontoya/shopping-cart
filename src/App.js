import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems />
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

const CartItems =  () => (
  <div className="container">
    <h1>Cart Items</h1>
  </div>
)

export default App;
