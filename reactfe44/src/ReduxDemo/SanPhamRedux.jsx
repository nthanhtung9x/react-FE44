import React, { Component } from 'react';
import { connect } from 'react-redux';

class SanPhamRedux extends Component {

    render() {
        let { hinhAnh, tenSP, giaBan } = this.props.item;
        return (
            <div className="card">
            <img className="card-img-top" src={hinhAnh} alt={hinhAnh} height="320" />
            <div className="card-body">
                <h4 className="card-title">{tenSP}</h4>
                <p className="card-text">{giaBan}</p>
                <button className="btn btn-danger" onClick={() => {
                    this.props.handleAddToCart(this.props.item)
                }}>Thêm giỏ hàng</button>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        BaiTapGioHangReducer: state.BaiTapGioHangReducer
    }
};

// Hàm tạo ra prop là phương thức đưa dữ liệu lên reducer thông qua dispatch.
const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAddToCart: (item) => {
            let spGH = {
                maSP: item.maSP,
                tenSP: item.tenSP,
                giaBan: item.giaBan,
                count: 1,
                hinhAnh: item.hinhAnh
            };
            let action = {
                type: 'ADD_TO_CART',
                spGH:spGH
            };
            
            // Dùng hàm dispatch gửi giá trị lên reducer để set lại state.
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);