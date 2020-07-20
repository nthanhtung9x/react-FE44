import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        let { hinhAnh, tenSP, giaBan } = this.props.item;
        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt={hinhAnh} height="320" />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">{giaBan}</p>
                    <button className="btn btn-primary mr-2" onClick={() => this.props.handleDetail(this.props.item)}>Chi tiết</button>
                    <button className="btn btn-danger" data-toggle="modal" data-target="#modelId" onClick={() => {
                        this.props.handleAddToCart(this.props.item)
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        );
    }
}


export default ProductItem;