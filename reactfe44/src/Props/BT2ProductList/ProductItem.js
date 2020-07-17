import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        let { name, price, image } = this.props.product;
        return (
            <div className="col-4 mb-4">
                <div className="card" style={{height:500, overflow:'hidden'}}>
                    <img height={300} className="card-img-top" src={image} alt={image} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <button className="btn btn-dark">Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;