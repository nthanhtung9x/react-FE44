import React, { Component } from 'react';

class ModalCart extends Component {
    // componentDidUpdate(prevProps) {
    //     if(this.props.item !== prevProps.item){
    //         let { item } = this.props;
            
    //     } 
    // }

    renderCart = () => {
        return this.props.item.map((item,index) => {
            return <tr key={index}>
                <td><img src={item.hinhAnh} alt={item.hinhAnh} width="100" height="100" /></td>
                <td>{item.tenSP}</td>
                <td>{item.giaBan.toLocaleString()}</td>
                <td>{item.count}</td>
                <td>{(item.count * item.giaBan).toLocaleString()}</td>
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
                                <tbody>
                                    {this.renderCart()}
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