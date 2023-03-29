import React from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    useParams
} from "react-router-dom";
var _ = require('lodash');

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

var imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    width: '150px'
};

class HomeComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        window.scrollTo(0, 0);
        var products = this.props.products;
        products = products.slice( 0, 4);
        products = products.map((product, key) => {
            var price = formatter.format(product.price);
            return(
                <div className="col-sm-3 border" style={{textAlign: 'center'}}>
                    <HashRouter>
                    <br />
                    <img src={"img/" + product.image} className="img-fluid" style={imgStyle} alt={product.productName} title={product.productName} />
                    <h4>{product.productName}</h4>
                    <p className="price">{price}</p>
                    <br />
                    <NavLink exact to={ "/products/" + key} className="btn btn-success">
                        View Details
                    </NavLink>
                    <br /><br /><br />
                    </HashRouter>
                </div>
            )
        });

            return(
                <div>
                    <header className="masthead">
                        <img src="img/header.jpg" className="img-fluid" />
                    </header>

                    <div className="container">
                        <center>
                        <img src="img/sub_header.jpg" className="img-fluid" />
                        <br />
                        </center>
                        <br /><br />
                        <div className="row">
                            { products }
                        </div>
                    </div>
                </div>
            );
    }
}

export default HomeComponent;
