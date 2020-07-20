import React, { Component } from 'react';
import SanPhamProps from './SanPhamProps';

class DemoPropsFunction extends Component {
    danhSachSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./images/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./images/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./images/applephone.jpg" }
    ];

    state = {};

    renderProduct = () => {
        return this.danhSachSanPham.map((item,index) => {
            return  <div className="col-4" key={index}>
                        <SanPhamProps item={item} handleDetail={this.handleDetail}/>              
                    </div>
        })
    }

    handleDetail = (item) => {
        this.setState({
            ...item,
            display:true
        })
    }

    
    render() {
        let renderDetail = () => {
            if(this.state.display){
                return  <div className="row mt-5">
                        <div className="col-4">
                            <h3 className="text-center">{this.state.tenSP}</h3>
                            <img src={this.state.hinhAnh} alt={this.state.hinhAnh} style={{width:'100%'}}/>
                        </div>
                        <div className="col-8">
                            <h3>Thông số kỹ thuât</h3>
                            <table className="table border">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{this.state.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{this.state.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera</td>
                                        <td>{this.state.cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>Ram</td>
                                        <td>{this.state.ram}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
            return <></>;
        };

        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
                
                {renderDetail()}
            </div>
        );
    }
}

export default DemoPropsFunction;