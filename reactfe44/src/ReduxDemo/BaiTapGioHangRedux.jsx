import React, { Component } from 'react';
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux';
import GioHangRedux from './GioHangRedux';

class BaiTapGioHangRedux extends Component {
    render() {
        return (
            <div className="container my-2">
                <h3 className="text-center">Danh sách Sản Phẩm</h3>
                <DanhSachSanPhamRedux />
                <GioHangRedux />
            </div>
        );
    }
}

export default BaiTapGioHangRedux;