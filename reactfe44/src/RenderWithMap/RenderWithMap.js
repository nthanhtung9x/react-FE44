import React, { Component } from 'react';

class RenderWithMap extends Component {

    danhSachSanPham = [
        {ma:1,ten:'iphone X',price:15000000, hinhAnh:'https:picsum.photos/200/200'},
        {ma:2,ten:'iphone 11',price:18000000, hinhAnh:'https:picsum.photos/200/200'},
        {ma:3,ten:'iphone 12',price:25000000, hinhAnh:'https:picsum.photos/200/200'},
    ]

    renderTable = () => {
        return this.danhSachSanPham.map((item,index) => {
            return <tr key={index}>
                <td>
                    <img src={item.hinhAnh} alt={item.ten} width={100} height={100}/>
                </td>
                <td>{item.ma}</td>
                <td>{item.ten}</td>
                <td>{item.price.toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger btn-block">Delete</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className="container my-4 mx-auto">
                <h1 className="text-center mb-4">Danh muc san pham</h1>
                <table className="table bg-light">
                    <thead className="bg-primary text-white text-center">
                        <tr>
                            <th>Hinh anh</th>
                            <th>Ma San Pham</th>
                            <th>Ten san pham</th>
                            <th>Gia</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RenderWithMap;