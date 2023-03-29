import React from 'react';
import ProductsComponent from './ProductsComponent';
import ProductComponent from './ProductComponent';
import HomeComponent from './HomeComponent';
import CartComponent from './CartComponent';

import axios from 'axios';
import {
  Route,
  NavLink,
  HashRouter,
  routerProps
} from "react-router-dom";
var _ = require('lodash');


class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderBy: "name",
            orderDir: "asc",
            dataIsLoaded : false,
            products : [],
            cart : []
        };
        this.addToCart = this.addToCart.bind(this);
        this.clearCart = this.clearCart.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct(productKey) {
        var cartItems = this.state.cart;
        var ctr = 0;
        var itemsCount = cartItems.length;
        while (ctr < itemsCount) {
            var index = cartItems.indexOf(productKey);
            if (index !== -1) {
                cartItems.splice(index, 1);
            }
            ctr++;
        }
        this.setState({
            cart : cartItems
        });
    }

    addToCart(productKey) {
        this.state.cart.push(productKey);
        this.forceUpdate();
    }

    clearCart() {
        this.setState({
            cart : []
        });
    }

    componentDidMount() {
        axios.get('data.json')
            .then(result => {
                this.setState({
                    products : result.data,
                    dataIsLoaded : true
                });
            })
    }

    render() {
        var cartItems = this.state.cart.length;
        return(
            <div>
                <HashRouter>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <a className="navbar-brand" href="#"><i className="fas fa-couch"></i> Furnitures</a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="basicExampleNav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact to="/" className="nav-link">
                                        <a className="nav-link" href="#">
                                            Home
                                        </a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/products" className="nav-link">
                                        <a className="nav-link" href="#">Products</a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/cart" className="nav-link">
                                        <a className="nav-link" href="#">
                                            Cart <span className="badge badge-danger">{ cartItems }</span>
                                        </a>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="content">
                        <Route exact path="/"  render={props => (<HomeComponent products={this.state.products} />) } />
                        <Route exact path="/products" render={props => (<ProductsComponent products={this.state.products} handleAddToCart={this.addToCart} />) } />
                        <Route path="/products/:productKey" component={(routerProps) => <ProductComponent productKey={routerProps.match.params.productKey} products={this.state.products} handleAddToCart={this.addToCart} />} />
                        <Route path="/cart" render={props => (<CartComponent cart={this.state.cart} products={this.state.products} handleClearCart={this.clearCart} handleRemoveProduct={this.removeProduct}/>) } />
                    </div>
                </HashRouter>
            </div>
        );
    }
}


export default MainComponent;
