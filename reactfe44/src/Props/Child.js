import React, { Component } from 'react';

class Child extends Component {
    
    // this.props: là thuộc tính có sẵn của component nhận giá trị từ component cha truyền vào, và không thể gán lại giá trị.

    render() {
        let { name, price, image } = this.props.product;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={image} alt />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{price}</p>
                </div>
            </div>
        );
    }
}

export default Child;