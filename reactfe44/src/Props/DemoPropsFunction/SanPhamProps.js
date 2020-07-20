import React, { Component } from 'react';

class SanPhamProps extends Component {
    render() {
        let { hinhAnh, tenSP, giaBan } = this.props.item;
        return (
            <div className="card">
                    <img height="320" className="card-img-top" src={hinhAnh} alt={hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{tenSP}</h4>
                        <p className="card-text">{giaBan}</p>
                        <button className="btn btn-primary" onClick={() => {
                            this.props.handleDetail(this.props.item)
                        }}>Xem chi tiết</button>
                    </div>
            </div>  
        );
    }
}

export default SanPhamProps;