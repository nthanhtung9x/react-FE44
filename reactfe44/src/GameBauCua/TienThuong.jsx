import React, { Component } from 'react';
import { connect } from 'react-redux';
import styleBauCua from './BaiTapGameBauCua.module.css';
class TienThuong extends Component {
    render() {
        let numberNN = Date.now();
        let keyframeCSS = `@keyframes animationXucXac${numberNN} {
            0% {transform: translateX(-2%);}
            20% {transform: translateX(-1%);}
            40% {transform: translateX(0%);}
            60% {transform: translateX(1%);}
            80% {transform: translateX(0%);}
            100% {transform: translateX(-2%);}
        }
        
        .xucXac {
            transform: translateX(0%);
            animation: animationXucXac${numberNN} 5s infinite;
        }`


        return (
            <div className="text-center">
                <style>
                    {keyframeCSS}
                </style>
                <h1 className={
                    `
                    text-dark 
                    bg-danger 
                    my-2 
                    w-25 m-auto p-3 
                    xucXac
                    `
                    // ${styleBauCua.xucXac}
                    } style={{
                        fontSize:'18px',
                        borderRadius:'12px', 
                }}>
                   
                    Tiền thưởng: <span className="text-white" style={{fontSize:'20px'}}>{this.props.tienThuong}</span> $
                </h1>
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