import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../redux/actions/QuanLyNguoiDungAction';

class TableNguoiDung extends Component {

    renderUserList = () => {
        return this.props.userList.map((item, index) => {
            return  <tr key={index}>
                        <td>{item.taiKhoan}</td>
                        <td>{item.matKhau}</td>
                        <td>{item.hoTen}</td>
                        <td>{item.email}</td>
                        <td>{item.soDt}</td>
                        <td>{item.maLoaiNguoiDung}</td>
                        <td>
                            <button className="btn btn-primary mr-2" onClick={() => {
                                this.props.dispatch(action.updateUser(item));
                            }}>Chỉnh sửa</button>
                            <button className="btn btn-danger" onClick={() => this.props.dispatch(action.deleteUser(item.taiKhoan))}>Xóa</button>
                        </td> 
                    </tr>
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="card text-dark bg-light text-center">
                    <div className="card-header text-white bg-dark">
                        Danh sách người dùng
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Tài khoản</th>
                                    <th>Họ tên</th>
                                    <th>Mật khẩu</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Loại người dùng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.renderUserList() }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userList: state.BaiTapQuanLyNguoiDung.mangNguoiDung
    }
};

export default connect(mapStateToProps)(TableNguoiDung);