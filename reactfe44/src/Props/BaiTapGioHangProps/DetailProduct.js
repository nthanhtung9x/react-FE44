import React, { Component } from 'react';

class DetailProduct extends Component {
    render() {
        let { tenSP, hinhAnh, manHinh, heDieuHanh, cameraSau, ram } = this.props.item;
        
        const renderDetail = () => {
            return <div className="row mt-5">
                        <div className="col-4">
                            <h3 className="text-center">{tenSP}</h3>
                            <img src={hinhAnh} alt={hinhAnh} style={{width:'100%'}}/>
                        </div>
                        <div className="col-8">
                            <h3>Thông số kỹ thuât</h3>
                            <table className="table border">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera</td>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>Ram</td>
                                        <td>{ram}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
        }

        return (
            <>
                { renderDetail() }
            </>
        );
    }
}

export default DetailProduct;