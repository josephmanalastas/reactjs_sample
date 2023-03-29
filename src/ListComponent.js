import React from 'react';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

var imgStyle = {
  maxWidth: '100%',
  height: 'auto'
};


class ListComponent extends React.Component {
    constructor(props) {
      super(props);
      this.processDelete = this.processDelete.bind(this);
    }

    processDelete() {
        this.props.handleDelete(this.props.selectedItem);
    }

    renderImage(imageUrl) {
        return (
            <div>
                <img src={imageUrl} className="img-fluid" style={imgStyle} />
            </div>
        );
    }

    render() {
        var price = formatter.format(this.props.product.price);
        return (

            <div className="row">
                <div className="col">
                    <h3>{this.props.product.productName}</h3>
                    <img src={"img/" + this.props.product.image} className="img-fluid" style={imgStyle} />
                    <p>{this.props.product.description}</p>
                    <p>{price}</p>
                    <p>{this.props.product.details}</p>
                    <br /><br />
                </div>
            </div>
        )
    }
}

export default ListComponent;
