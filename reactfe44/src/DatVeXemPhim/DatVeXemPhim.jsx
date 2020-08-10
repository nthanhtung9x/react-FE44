import React, { Component } from 'react';
import './DatVeXemPhim.css';
import { connect } from 'react-redux';
import * as action from '../redux/actions/DatVeXemPhimAction';

class DatVeXemPhim extends Component {
    render() {
        let { danhSach, danhSachChon, total } = this.props.BaiTapDatVeXemPhim;
        let renderGhe = () => {
            return danhSach.map((child) => {
                return child.danhSachGhe.map((item, index) => {
                    for(let i = 0; i < danhSachChon.length; i++) {
                        if(item.soGhe === danhSachChon[i].ghe.soGhe) {
                            return <div className="col-1 px-2 mt-3" key={index}>
                                <button className="ghe gheDangChon" onClick={() => {
                                    this.props.dispatch(action.handleChange(item,child.hang))
                                }}>{item.soGhe}</button>
                            </div>
                        }
                    }
                    return <div className="col-1 px-2 mt-3" key={index}>
                                <button className={item.daDat ? "ghe gheDuocChon" : "ghe"} disabled={item.daDat ? true : false} onClick={() => {
                                    this.props.dispatch(action.handleChange(item, child.hang))
                                }}>{item.soGhe}</button>
                            </div>
                })
            });
        }

        let renderCot = () => {
            return danhSach.map((item, index) => {
                return <span className="firstChar" key={index}>{item.hang}</span>
            });
        }

        let renderTable = () => {
            return danhSachChon.map((item, index) => {
                return  <tr key={index}>
                            <td className="text-warning" style={{verticalAlign:'middle'}}>{item.ghe.soGhe}</td>
                            <td className="text-warning" style={{verticalAlign:'middle'}}>{item.ghe.gia}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {
                                    this.props.dispatch(action.deleteTicket(item.ghe.soGhe));
                                }}>x</button>
                            </td>
                        </tr>
            })
        }

        return (
            <div className="bookingMovie">
                <div className="overlay">
                    <div className="container-fluid pt-3">
                        <div className="row">
                            <div className="col-8">
                                <h1 className="text-warning text-center">ĐẶT VÉ XEM PHIM</h1>
                                <div className="room">
                                    <h5 className="text-white text-center">Màn hình</h5>
                                    <p className="screen"></p>
                                    <div className="numberChar">
                                        <div className="row">
                                        <div className="col-1">
                                            <span className="rowNumber">1</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">2</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">3</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">4</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">5</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">6</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">7</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">8</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">9</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">10</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">11</span>
                                        </div>
                                        <div className="col-1">
                                            <span className="rowNumber">12</span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="chair__wrapper">
                                        <div className="row">
                                            <div className="col-1 d-flex flex-column">
                                                { renderCot() }

                                            </div>
                                            <div className="col-11">
                                                <div className="row" style={{width:'98%'}}>
                                                    { renderGhe() }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mt-5">
                                <h2 className="text-white text-center">DANH SÁCH GHẾ BẠN CHỌN</h2>
                                <div className="info mt-4">
                                    <div className="text-white d-flex align-items-center mt-2 note">
                                        <span className="gheDuocChon mr-2"></span>
                                        Ghế đã được đặt
                                    </div>
                                    <div className="text-white d-flex align-items-center mt-2 note">
                                        <span className="gheDangChon mr-2"></span>
                                        Ghế đang chọn
                                    </div>
                                    <div className="text-white d-flex align-items-center mt-2 note">
                                        <span className="ghe gheChuaChon mr-2"></span>
                                        Ghế chưa chọn
                                    </div>
                                </div>
                                <table className="table mt-4 table-bordered">
                                    <thead className="text-light">
                                        <tr>
                                            <th>Số ghế</th>
                                            <th>Giá</th>
                                            <th>Hủy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       { renderTable() }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className="text-light">Tổng tiền:</td>
                                            <td className="text-warning">{total}</td>
                                            <td></td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={() => {
                                        this.props.dispatch(action.bookTicket())
                                    }}>ĐẶT VÉ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        BaiTapDatVeXemPhim: state.BaiTapDatVeXemPhim
    }
)

export default connect(mapStateToProps)(DatVeXemPhim);