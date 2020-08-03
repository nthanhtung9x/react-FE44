import React, { Component } from 'react';

class FormValidation extends Component {

    state = {
        values: {
            taiKhoan: "",
            matKhau: "",
            Email: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: ""
        },
        errors: {
            taiKhoan: "",
            matKhau: "",
            Email: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: ""
        }
    }

    handleChange = (e) => {
        let {name,value, type} = e.target;
        console.log(e.target.type)
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

        this.setState(newState, () => {
            console.log(this.state);
        })
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
    }

    render() {
        return (
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
                                    <input className="form-control" name="taiKhoan" onChange={this.handleChange}/>
                                    <p className="text-danger">{this.state.errors.taiKhoan}</p>
                                </div>
                                <div className="form-group">
                                    <p>Mật khẩu</p>
                                    <input className="form-control" name="matKhau" onChange={this.handleChange}/>
                                    <p className="text-danger">{this.state.errors.matKhau}</p>
            
                                </div>
                                <div className="form-group">
                                    <p>Email</p>
                                    <input className="form-control" name="Email" type="email" onChange={this.handleChange}/>
                                    <p className="text-danger">{this.state.errors.Email}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Họ Tên</p>
                                    <input className="form-control" name="hoTen" onChange={this.handleChange}/>
                                    <p className="text-danger">{this.state.errors.hoTen}</p>
                                </div>
                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input className="form-control" name="soDT" onChange={this.handleChange}/>
                                    <p className="text-danger">{this.state.errors.soDT}</p>
                                </div>
                                <div className="form-group">
                                    <p>Mã loại người dùng</p>
                                    <select className="form-control" name="maLoaiNguoiDung" onChange={this.handleChange}>
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
        );
    }
}


export default FormValidation;