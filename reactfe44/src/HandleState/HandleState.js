import React, { Component } from 'react';

class HandleState extends Component {
    // state: Thuộc tính có sẵn của class component => Cho phép thay đổi giá trị và render lại giao diện
    state = {
        isLogin: false,
        userName: 'Hào'
    }



    // Tạo ra 2 thuộc tính là
    // isLogin: true => hello Hào
    // isLogin: false => Hiển thị nút đăng nhập
    // isLogin = false;
    // userName = 'Hào';

    handleLogin = () => {
        // this.setState là phương thức có sẵn của component nhận vào state mới thay cho giá trị state cũ và tự động gọi lại hàm render.
        // setState là phương thức bất đồng bộ.
        // Cách 1:
        const newState = {
            isLogin: true
        };
        // this.setState(newState);
        this.setState(newState, () => {
            // tham số thứ 2 của hàm setState là callback chạy sau khi state thay đổi.
            console.log(this.state.isLogin);
        });
        // Cách 2:
        this.setState({isLogin:true});
    }

    renderContent = () => {
        if(this.state.isLogin) {
            return <h1>Hello {this.state.userName}</h1>;
        }
        return <button onClick={() => {
            this.handleLogin();
        }}>Đăng nhập</button> 
    }

    render() {
        return (
            <div>
                {
                    this.state.isLogin ? <h1>Hello {this.state.userName}</h1> : <button>Đăng nhập</button>
                }

                {this.renderContent()}
            </div>
        );
    }
}

export default HandleState;