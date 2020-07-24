import React, { Component } from 'react';

class ModalCart extends Component {

    renderCart = () => {
        return this.props.item.map((item,index) => {
            return <tr key={index}>
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
        return this.props.item.reduce((total, item) => {
            return total += (item.giaBan * item.count);
        },0);
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
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
                                <tbody className="text-center">
                                    { this.props.item.length > 0 ? this.renderCart() : <tr><td colSpan="5"><p className="text-center my-2">Không có sản phẩm trong giỏ hàng.</p></td></tr>}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="4" className="text-right">Thành tiền</td>
                                        <td colSpan="1">{this.countTotal().toLocaleString()}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Thoát</button>
                            <button type="button" className="btn btn-primary">Mua hàng</button>
                        </div>
                    </div>
                    </div>
                </div>                
            </div>

        );
    }
}

export default ModalCart;