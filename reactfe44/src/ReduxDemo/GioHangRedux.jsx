import React, { Component } from 'react';

import {connect} from 'react-redux'; // Thư viện kết nối react component và redux store.

class GioHangRedux extends Component {
    renderCart = () => {
        return this.props.BaiTapGioHangReducer.stateGioHang.map((item,index) => {
            return  <tr key={index}>
                        <td><img src={item.hinhAnh} alt={item.hinhAnh} width="100" height="100" /></td>
                        <td>{item.tenSP}</td>
                        <td>{item.giaBan.toLocaleString()}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => {
                                this.props.handleChangeCount(item.maSP, false)
                            }}>-</button>
                            {item.count}
                            <button className="btn btn-primary" onClick={() => {
                                this.props.handleChangeCount(item.maSP, true)
                            }}>+</button>
                        </td>
                        <td>{(item.count * item.giaBan).toLocaleString()}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => {
                                this.props.handleDeleteProductInCart(item.maSP)
                            }}>Xóa</button>
                        </td>
                    </tr>
        })
    }

    countTotal = () => {
        return this.props.BaiTapGioHangReducer.stateGioHang.reduce((total, item) => {
            return total += (item.giaBan * item.count);
        },0);
    }

    render() {
        return (
            <div className="mt-5 text-center">
                <h3>Giỏ hàng</h3>
                <table className="table border">
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Tên SP</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCart()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" className="text-right">Thành tiền</td>
                            <td colSpan="1">0</td>
                        </tr>
                    </tfoot>
                </table> 
            </div>
        );
    }
}


// Hàm có nhiệm vụ biến đổi state của redux thành props của component.
const mapStateToProps = state => {
    return {
        BaiTapGioHangReducer: state.BaiTapGioHangReducer
    }
}

export default connect(mapStateToProps)(GioHangRedux);