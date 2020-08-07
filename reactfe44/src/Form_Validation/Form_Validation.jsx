import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableNguoiDung from './TableNguoiDung';
import * as action from '../redux/actions/QuanLyNguoiDungAction';
// thư viện support cực mạnh về xử lý mảng và object.
import _ from 'lodash';
class FormValidation extends Component {

    state = {
        values: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            hoTen: "",
            soDt: "",
            maLoaiNguoiDung: "KhachHang"
        },
        errors: {
            taiKhoan: "",
            matKhau: "",
            Email: "",
            hoTen: "",
            soDt: "",
            maLoaiNguoiDung: ""
        }
    }

    handleChange = (e) => {
        let {name,value, type} = e.target;
        var newValues = {
            ...this.state.values,
            [name]: value
        };

        var newErrors = {
            ...this.state.errors,
            [name]: value.trim() === '' ? `${name} không được bỏ trống` : ''
        };

        if(type === 'email') {
            let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regexEmail.test(value)) {
                newErrors[name] = name + 'Không hợp lệ !';
            }
        }

        var newState = {
            values: newValues,
            errors: newErrors
        }

        this.setState(newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // kiểm tra ngăn submit khi còn lỗi

        let valid = true;
        for(let key in this.state.values) {
            if(this.state.values[key] === '') {
                valid = false;
                break;
            }
        }

        for(let key in this.state.errors) {
            if(this.state.errors[key] !== '') {
                valid = false;
                break;
            }
        }
        
        if(!valid) {
            alert('Dữ liệu không hợp lệ');
            return;
        }
        this.props.dispatch(action.addUser(this.state.values));
        this.setState({
            values: {
                taiKhoan: "",
                matKhau: "",
                email: "",
                hoTen: "",
                soDt: "",
                maLoaiNguoiDung: "KhachHang"
            } 
        });
    }

    // Hàm này được chạy khi props hoặc state thay đổi và chạy trước khi render.
    // componentWillReceiveProps(newProps, newState) {
    //     // this.props có thuộc tính gì thì newProps có thuộc tính đó.
    //     let { nguoiDungEdit } = newProps;
    //     // Trước render => gán state.values = nguoiDungEdit
    //     this.setState({
    //         values: nguoiDungEdit
    //     })
    // };

    static getDerivedStateFromProps(newProps, currentState) {

        
        let { nguoiDungEdit } = newProps;
        if(!_.isEqual(nguoiDungEdit.taiKhoan, currentState.values.taiKhoan)) {
            let newState = {...currentState,values: nguoiDungEdit};
            return newState; // Trả về state mới
        }

        return null;
    };

    render() {
        // let { taiKhoan, matKhau, hoTen, soDt, email, maLoaiNguoiDung} = this.props.nguoiDungEdit;
        return (
            <>
                <form onSubmit={this.handleSubmit} className="container-fluid">
                    <div className="card text-left">
                        <div className="card-header bg-dark text-light">
                            <h3>Form Đăng Ký</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Tài khoản</p>
                                        <input className="form-control" name="taiKhoan" value={this.state.values.taiKhoan} onChange={this.handleChange}/>
                                        <p className="text-danger">{this.state.errors.taiKhoan}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Mật khẩu</p>
                                        <input className="form-control" name="matKhau" value={this.state.values.matKhau} onChange={this.handleChange}/>
                                        <p className="text-danger">{this.state.errors.matKhau}</p>
                
                                    </div>
                                    <div className="form-group">
                                        <p>Email</p>
                                        <input className="form-control" name="email" type="email" value={this.state.values.email} onChange={this.handleChange}/>
                                        <p className="text-danger">{this.state.errors.Email}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Họ Tên</p>
                                        <input className="form-control" name="hoTen" value={this.state.values.hoTen} onChange={this.handleChange}/>
                                        <p className="text-danger">{this.state.errors.hoTen}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Số điện thoại</p>
                                        <input className="form-control" name="soDt" value={this.state.values.soDt} onChange={this.handleChange}/>
                                        <p className="text-danger">{this.state.errors.soDT}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Mã loại người dùng</p>
                                        <select className="form-control" name="maLoaiNguoiDung" value={this.state.values.maLoaiNguoiDung} onChange={this.handleChange}>
                                            <option value="KhachHang">Khách hàng</option>
                                            <option value="QuanTri">Quản trị</option>
                                        </select>
                                        <p className="text-danger">{this.state.errors.maLoaiNguoiDung}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="text-right col-12">
                                    <button className="btn btn-success">Đăng ký</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
                <TableNguoiDung/>
            </>
        );
    }
    // componentDidUpdate(prevProps, prevState) { // nhận vào props
    //     if(!_.isEqual(prevProps.nguoiDungEdit, this.props.nguoiDungEdit)) {
    //         this.setState({
    //             values: 
    //         })
    //     }
    // };
}

const mapStateToProps = state => (
    {
        nguoiDungEdit: state.BaiTapQuanLyNguoiDung.nguoiDungEdit
    }
)

export default connect(mapStateToProps)(FormValidation);

// Nguyên nhân lỗi giao diện không nhập được: 
// + Khi thay đổi dữ liệu input => setState được gọi => giao diện sẽ render lại (1).
// + Mặt khác value của các input trên giao diện đang được lấy từ redux (2).
// + Theo life cycle react class component thì khi setState được gọi render sẽ chạy lại, nhưng render đang theo dõi props từ redux (nguoiDungEdit) (3).
// + Từ (1)(2)(3) => Vòng lặp được sinh ra. => người dùng gõ phím => setState được gọi => render chạy lại => render lại lấy dữ liệu từ redux qua props (nguoiDungEdit => luôn load lại dữ liệu cũ).

// Khắc phục: 
// + Props: nguoiDungEdit => Mỗi khi click chỉnh sửa thì nó thay đổi.
// + state.values: dữ liệu của người dùng.
// + LifeCycle cũ: 
//   + Bằng 1 cách nào đó trước khi giao diện gọi hàm render ta lấy được props gắn vào state => sau đó binding giá trị giao diện ra từ state.values. (Sử dụng componentWillReceiveProps)