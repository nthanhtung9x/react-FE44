import React, { Component } from 'react';
import SanPhamRedux from './SanPhamRedux';
import { connect } from 'react-redux';

class DanhSachSanPhamRedux extends Component {

    renderProduct = () => {
        return this.props.BaiTapGioHangReducer.danhSachSanPham.map((item,index) => {
            return <div className="col-4" key={index}>
                        <SanPhamRedux item={item} />
                    </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderProduct()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        BaiTapGioHangReducer: state.BaiTapGioHangReducer
    }
}

export default connect(mapStateToProps)(DanhSachSanPhamRedux);