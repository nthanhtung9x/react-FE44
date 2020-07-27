import React, { Component } from 'react';
import { connect } from 'react-redux';

class TienThuong extends Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="text-dark bg-danger my-2 w-25 m-auto p-3" style={{fontSize:'18px',borderRadius:'12px'}}>Tiền thưởng: <span className="text-white" style={{fontSize:'20px'}}>{this.props.tienThuong}</span> $</h1>
                <br/>
                <button className="btn btn-dark mb-2 btn-inline-block" onClick={() => {
                    this.props.handleReplay()
                }}>Chơi lại</button>  
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tienThuong: state.BaiTapGameBauCuaReducer.tienThuong
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleReplay: () => {
            dispatch({
                type: 'HANDLE_REPLAY'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TienThuong);