import React, { Component } from 'react';
import ProductComponent from './Product';

class ProductListComponent extends Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-4 mb-4">
                    <ProductComponent/>
                </div>
                <div className="col-4 mb-4">
                    <ProductComponent/>
                </div>
                <div className="col-4 mb-4">
                    <ProductComponent/>
                </div>
                <div className="col-4 mb-4">
                    <ProductComponent/>
                </div>
                <div className="col-4 mb-4">
                    <ProductComponent/>
                </div>
                <div className="col-4 mb-4">
                    <ProductComponent/>
                </div>
            </div>
        );
    }
}

export default ProductListComponent;