import React, { Component } from 'react';

class ProductComponent extends Component {
    render() {
        return (
            <div className="card">
                <img src="https:picsum.photos/300/300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">Item</h5>
                    <p className="font-weight-bold">$24.99</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">
                        <i class="fas fa-star mr-1"></i>
                        <i class="fas fa-star mr-1"></i>
                        <i class="fas fa-star mr-1"></i>
                        <i class="fas fa-star mr-1"></i>
                        <i class="fas fa-star mr-1"></i>
                    </small>
                </div>
            </div>
        );
    }
}

export default ProductComponent;