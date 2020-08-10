import React, { Component } from 'react';
import './BaiTapBurger.css';
import { connect } from 'react-redux';
import * as action from '../redux/actions/BaiTapBurgerAction';


class BaiTapBurger extends Component {
    render() {
        let { burger, menu, total } = this.props.BaiTapBurger;

        let renderBurger = () => {
            // Cách 1:
            // return Object.keys(burger).map((item) => {
            //     let result = [];
            //     for(let i = 0; i < burger[item]; i++) {
            //         result.push(<p className={item} key={i}></p>); 
            //     }
            //     return result;
            // });

            // Cách 2:
            return Object.entries(burger).map(([key,value], index) => {
                let result = [];
                for(let i = 0; i < value; i++) {
                    result.push(<p className={key} key={i + index}></p>);
                }
                return result;
            })
        }

        let renderTable = () => {
            return Object.entries(burger).map(([key,value], index) => {
                return  <tr key={index}>
                            <td>{key}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {
                                    this.props.dispatch(action.handleChange(false, key))
                                }}>-</button>
                                <span className="mx-1">{value}</span>
                                <button className="btn btn-primary" onClick={() => {
                                    this.props.dispatch(action.handleChange(true, key))
                                }}>+</button>
                            </td>
                            <td>
                                {menu[`${key}`] * value}
                            </td>
                        </tr>;
            });
        }

        return (
            <div className="container">
                <h3 className="text-center display-4 my-4">Bài tập burger</h3>
                <div className="row">
                    <div className="col-6">
                        <p className="breadTop"></p>
                        { renderBurger() }
                        <p className="breadBottom"></p>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header bg-light">
                                <h4>Chọn thức ăn</h4>
                            </div>
                            <div className="card-body">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Thức Ăn</th>
                                            <th>Số Lượng</th>
                                            <th>Giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { renderTable() }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Tổng tiền:
                                            </td>
                                            <td>
                                                {total}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <button className="btn btn-success" onClick={() => {
                                                    this.props.dispatch(action.buyBurger());
                                                }}>Thanh Toán</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
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
        BaiTapBurger: state.BaiTapBurger
    }
)

export default connect(mapStateToProps)(BaiTapBurger);