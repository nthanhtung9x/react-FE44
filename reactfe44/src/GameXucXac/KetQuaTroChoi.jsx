import React, { Component } from 'react';
import { connect } from 'react-redux';


class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="text-center mt-5">
                <p style={{
                    fontSize:'32px'
                }}>Bạn chọn: <span className="text-primary" style={{fontSize:'42px'}}>{this.props.banChon}</span></p>
                 <p style={{
                    fontSize:'32px'
                }}>Bàn thắng: <span className="text-secondary" style={{fontSize:'42px'}}>{this.props.soBanThang}</span></p>
                <p style={{
                    fontSize:'32px'
                }}>Tổng số bàn chơi: <span className="text-danger" style={{fontSize:'42px'}}>{this.props.SoBanChoi}</span></p>
                <button className="btn btn-success" style={{
                    fontSize:'32px'
                }}>Chơi game</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        banChon: state.GameXucXacReducer.banChon,
        soBanThang: state.GameXucXacReducer.soBanThang,
        SoBanChoi: state.GameXucXacReducer.SoBanChoi,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);