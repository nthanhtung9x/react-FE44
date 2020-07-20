import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {
    render() {
        let { danhSachSanPham } = this.props;
        const renderProduct = () => {
            return danhSachSanPham.map((item,index) => {
                return <div className="col-4" key={index}>
                            <ProductItem item={item} handleDetail={this.props.handleDetail} handleAddToCart={this.props.handleAddToCart}/>
                        </div>
            })
        }
        return (
            <div className="row">
                {renderProduct()}
            </div>
        );
    }
}

export default Products;