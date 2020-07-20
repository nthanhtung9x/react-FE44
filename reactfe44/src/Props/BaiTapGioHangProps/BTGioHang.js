import React, { Component } from 'react';
import Products from './Products';
import ModalCart from './ModalCart';
import DetailProduct from './DetailProduct';

class BTGioHang extends Component {
    danhSachSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./images/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./images/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./images/applephone.jpg" }
    ];

    state = {
        detail: {},
        cart: [],
        display:false
    };

    handleDetail = (item) => {
        this.setState({
            detail: item,
            display:true,
        })
    };

    handleAddToCart = (item) => {
        let findProduct = this.state.cart.findIndex(data => {
            return data.maSP === item.maSP;
        })
        if(findProduct >= 0) {
            let temp = [...this.state.cart];
            temp.splice(findProduct,1,{
                ...temp[findProduct],
                count: temp[findProduct].count + 1
            })
            this.setState({
                cart: temp
            })
        } else {
            this.setState({
                cart: [...this.state.cart, {...item,count:1}]
            })
        }
    }
    
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách Sản Phẩm</h3>
                <Products danhSachSanPham={this.danhSachSanPham} handleDetail={this.handleDetail} handleAddToCart={this.handleAddToCart}/>
                { this.state.display ? 
                        <DetailProduct item={this.state.detail}/>
                    :
                    <></>
                }    
                <ModalCart item={this.state.cart}/>
            </div>
        );

    }
}

export default BTGioHang;