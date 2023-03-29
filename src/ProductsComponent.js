import React from 'react';
import ListComponent from './ListComponent';
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

class ProductsComponent extends React.Component {
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

        products = products.map((product, key) => {
            var price = formatter.format(product.price);
            return(
                <div>
                    <div className="row">
                        <div className="col-sm-8">
                            <img src={"img/" + product.image} className="img-fluid" style={imgStyle} alt={product.productName} width="650px"/>
                            <br /><br />
                            <p>{product.long_description}</p>
                        </div>
                        <div className="col-sm-4">
                            <br /><br />
                            <h3>{product.productName}</h3>
                            <p>{product.description}</p>
                            <p className="price">{ price }</p>
                            <p>{product.details}</p>
                            <img src="img/zippay.png" width="351" className="img-fluid" />
                            <br /><br />
                            <button type="button" className="btn btn-primary" onClick = { this.processAddToCart } value={key} >Add To Cart</button>
                        </div>
                    </div>
                    <br /><br />
                </div>
            )
        });
        return (
            <div>
                <header className="masthead">
                    <img src="img/products.png" className="img-fluid" />
                </header>
                <div className="container">
                    <h2>Products</h2>
                    { products }
                </div>
            </div>
        )
    }
}


export default ProductsComponent;
