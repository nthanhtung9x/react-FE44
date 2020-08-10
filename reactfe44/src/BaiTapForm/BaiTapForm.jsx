import React, { Component } from 'react';
import './BaiTapForm.css';
import Swal from 'sweetalert2';

class BaiTapForm extends Component {

    state = {
        values: {
            Ho: "",
            Ten: "",
            taiKhoan: "",
            Email: "",
            matKhau: "",
            xacNhan: ""
        },
        errors: {
            Ho: "",
            Ten: "",
            taiKhoan: "",
            Email: "",
            matKhau: "",
            xacNhan: ""
        }
    }

    handleChange = (e) => {
        let { name, value, type } = e.target;

        let newValues = {
            ...this.state.values,
            [name]:value
        }

        let newErrors = {
            ...this.state.errors,
            [name]: value.trim() === "" ? `${name} không được bỏ trống` : ""
        }

        if(type === 'email') {
            let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regexEmail.test(value)) {
                newErrors[name] = name + 'Không hợp lệ !';
            }
        }

        if(name === 'xacNhan' && value !== newValues.matKhau) {
            newErrors[name] = 'Xác thực không chính xác';
        } else if(name === 'xacNhan' && value === newValues.matKhau) {
            newErrors[name] = "";
        }
        
        let newState = {
            values: newValues,
            errors: newErrors
        }

        this.setState(newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let flag = true;
        for(let key in this.state.errors) {
            if(this.state.errors[key] !== "") {
                flag = false;
                break;
            }
        }

        for(let key in this.state.values) {
            if(this.state.values[key] === "") {
                flag = false;
                break;
            }
        }

        if(!flag) {
            alert('Chưa nhập đủ thông tin ');
            return;
        }


        Swal.fire({
            title: 'Thông tin tài khoản!',
            html: `<div>
                    <p>Họ Tên: ${this.state.values.Ho + " " + this.state.values.Ten}</p>
                    <p>Tài Khoản: ${this.state.values.taiKhoan}</p>
                    <p>Email: ${this.state.values.Email}</p>
                    <p>Mật khẩu: ${this.state.values.matKhau}</p>
                </div>
            `,
            icon: 'success',
            confirmButtonText: 'OK'
        })

    }
 
    render() {
        return (
            <div className="form__wrapper bg-secondary">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h3 className="text-center">THÔNG TIN NGƯỜI DÙNG</h3>
                    <div className="row">
                        <div className="col-6">
                            <div className="form__group field">
                                <input type="input"  placeholder="Nhập họ" name="Ho" className="form__field" onChange={this.handleChange} value={this.state.values.Ho}/>
                                <label className="form__label">Họ</label>
                               <p className="text-danger">{this.state.errors.Ho}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form__group field">
                                <input type="input"  placeholder="Nhập tên"  name="Ten" className="form__field" onChange={this.handleChange} value={this.state.values.Ten}/>
                                <label className="form__label">Tên</label>
                                <p className="text-danger">{this.state.errors.Ten}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form__group field">
                        <input type="input"  placeholder="Nhập tài Khoản"  name="taiKhoan" className="form__field" onChange={this.handleChange} value={this.state.values.taiKhoan} />
                        <label className="form__label">Tài Khoản</label>
                        <p className="text-danger">{this.state.errors.taiKhoan}</p>
                    </div>
                    <div className="form__group field">
                        <input type="email"  placeholder="Nhập email"  name="Email" className="form__field" onChange={this.handleChange} value={this.state.values.Email}/>
                        <label className="form__label">Email</label>
                        <p className="text-danger">{this.state.errors.Email}</p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form__group field">
                                <input type="password"  placeholder="Nhập mật khẩu"  name="matKhau" className="form__field" onChange={this.handleChange} value={this.state.values.matKhau}/>
                                <label className="form__label">Mật khẩu</label>
                                <p className="text-danger">{this.state.errors.matKhau}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form__group field">
                                <input type="password"  placeholder="Xác nhận lại mật khẩu"  name="xacNhan" className="form__field" onChange={this.handleChange} value={this.state.values.xacNhan}/>
                                <label className="form__label">Xác nhận</label>
                                <p className="text-danger">{this.state.errors.xacNhan}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form__group field">
                        <button className="btn btn-block btn-success">XÁC NHẬN</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BaiTapForm;