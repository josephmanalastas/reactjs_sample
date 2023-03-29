import React from 'react';
var _ = require('lodash');

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

var imgStyle = {
  maxWidth: '100%',
  height: 'auto'
};

class ProductComponent extends React.Component {
    constructor(props) {
      super(props);
      this.processAddToCart = this.processAddToCart.bind(this);
    }

    processAddToCart(event) {
        this.props.handleAddToCart(event.target.value);
    }
    render() {
        window.scrollTo(0, 0);
        var products = this.props.products;
        var productKey = this.props.productKey;
        var price = (products.length > 0) ? formatter.format(products[productKey].price) : 0;
        if (products.length > 0) {
            return (
                <div>
                    <header className="masthead">
                        <img src="img/products.png" className="img-fluid" />
                    </header>
                    <div className="container">
                        <h2>Products Details</h2>
                        <br />
                        <div className="row">
                            <div className="col-sm-8">
                                <img src={"img/" + products[productKey].image} className="img-fluid" style={imgStyle} alt={products[productKey].productName} width="650px"/>
                                <br /><br />
                                <p>{products[productKey].long_description}</p>
                            </div>
                            <div className="col-sm-4">
                                <br /><br />
                                <h3>{products[productKey].productName}</h3>
                                <p>{products[productKey].description}</p>
                                <p className="price">{ price }</p>
                                <p>{products[productKey].details}</p>
                                <img src="img/zippay.png" width="351" className="img-fluid" />
                                <br /><br />
                                <button type="button" className="btn btn-primary" onClick = { this.processAddToCart } value={productKey} >Add To Cart</button>
                                <br /><br /><br />
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else {
            return (<div>''</div>)
        }
    }
}


export default ProductComponent;
