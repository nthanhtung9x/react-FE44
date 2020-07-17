import React, { Component } from 'react'

export default class EXRender extends Component {
    danhSachSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./images/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./images/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./images/applephone.jpg" }
    ];

    renderList = () => {
        return this.danhSachSanPham.map((item, index) => {
            return <div className="col-4" key={index}>
                        <div className="card" style={{height:450}}>
                            <img className="card-img-top" src={item.hinhAnh} alt={item.hinhAnh}  height={300}/>
                            <div className="card-body">
                                <h4 className="card-title">{item.tenSP}</h4>
                                <p className="card-text">Gia: {item.giaBan.toLocaleString()} VND</p>
                                <button className="btn btn-success">Xem chi tiet</button>
                            </div>
                        </div>
                    </div>
        })
    };

    render() {
        return (
            <div className="container my-4 mx-auto">
                <h1 className="text-center mb-4">Danh muc san pham</h1>
                <div className="row">
                    {this.renderList()}
                </div>
            </div>

            
        );
    }
}
