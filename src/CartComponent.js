import React from 'react';

var formStyle = {
    width: '20px',
};

var divStyle = {
    minWidth: '185px',
    padding: '10px',
};

var divPadding = {
    padding: '10px',
};




class CartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.processClearCart = this.processClearCart.bind(this);
        this.processRemoveProduct = this.processRemoveProduct.bind(this);
    }

    processRemoveProduct(event) {
        this.props.handleRemoveProduct(event.target.value);
    }

    processClearCart() {
        this.props.handleClearCart();
    }


    render() {
        window.scrollTo(0, 0);
        var products = this.props.products;
        var cartItems = this.props.cart;
        var newItems = [];
        cartItems = cartItems.map((cart) => {
            if (newItems[cart] !== undefined) {
                newItems[cart].count++;
            } else {
                newItems[cart] = { count : 1 };
            }
        });

        if (cartItems.length > 0) {
            var items = newItems.map((cartItems, key) => {
                return(
                    <div className="row">
                        <div style={divPadding}><img src={"img/" + products[key].image} className="img-thumbnail" width="70" alt={products[key].productName} /></div>
                        <div style={divStyle}>{products[key].productName}</div>
                        <div style={divPadding}>Items: { newItems[key].count }</div>
                        <div style={divPadding}><button type="button" className="btn btn-danger" onClick={ this.processRemoveProduct } value={key}>Remove</button></div>
                    </div>
                )
            });
            var clearButton = <div><button type="button" className="btn btn-primary" onClick={ this.processClearCart }>Clear Cart</button><br /><br /></div>;
        } else {
            var items = <div>{'No records found.'}<br /><br /></div>;
            var clearButton = '';
        }



        return (
            <div>
                <div className="container">
                    <br /><br /><br />
                    <center>
                    <img src="img/sub_header2.jpg" className="img-fluid" />
                    </center>
                    <br />
                    <h2>Cart Items</h2>
                    { items }
                    <br />
                    { clearButton }
                </div>
            </div>
        )
    }
}


export default CartComponent;
