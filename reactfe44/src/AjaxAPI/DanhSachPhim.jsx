import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../redux/actions/QuanLyPhimAction';

class DanhSachPhim extends Component {

    state = {
        danhSachPhim: []
    }

    renderDanhSachPhim = () => {
        return this.props.danhSachPhim.map(({ tenPhim, hinhAnh, moTa}, index) => {
            return  <div className="col-4" key={index}>
                        <div className="card">
                            <img className="card-img-top" src={hinhAnh} alt={tenPhim}  height="400"/>
                            <div className="card-body">
                                <h4 className="card-title">{tenPhim}</h4>
                                <p className="card-text">{moTa}</p>
                            </div>
                        </div>
                    </div>
        })
    }

    render() {
        return (
            <div>
                <h3 className="text-center display-4">Danh sách phim</h3>
                <div className="container">
                    <div className="row">
                        { this.renderDanhSachPhim() }
                    </div>
                </div>
            </div>
        );
    }

    // LifeCycle dùng để gọi ajax api.
    componentDidMount() {
        this.props.dispatch(action.layDanhSachPhimAPI());
    }
}

const mapStateToProps = state => (
    {
        danhSachPhim: state.QuanLyPhimReducer.danhSachPhim
    }
)

export default connect(mapStateToProps)(DanhSachPhim);