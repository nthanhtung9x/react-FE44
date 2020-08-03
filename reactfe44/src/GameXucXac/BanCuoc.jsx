import React, { Component } from 'react';
import { connect } from 'react-redux';
import styleXucXac from './GameXucXac.module.css';

class BanCuoc extends Component {
    render() {
        let renderXucXac = this.props.mangXucXac.map((item, index) => {
            return <img 
                        src={item.img} 
                        alt={item.ma} 
                        width="100" 
                        height="100" 
                        key={index}
                        className={this.props.stopRandom ? "" : styleXucXac.xucXac} 
                    />
        })
        return (
            <div className="pt-2">
                <h1 className="text-center pb-4">Game Xúc Xắc</h1>
                <div className="d-flex align-items-center justify-content-between">
                    <button className="btn border-dark bg-danger text-white" style={{
                            width:'200px',
                            height:'200px',
                            fontSize:'42px',
                            borderWidth:'4px'
                        }}
                        onClick={() => {
                            this.props.handleChose('TÀI')
                        }}
                    >Tài</button>
                    <p className="text-center">
                        {renderXucXac}
                        <span className="text-center mt-3 d-block" style={{fontSize:'32px'}}>Tổng điểm: {this.props.tongDiem}</span>
                    </p>
                    <button className="btn border-dark bg-warning text-white" style={{
                            width:'200px',
                            height:'200px',
                            fontSize:'42px',
                            borderWidth:'4px'
                        }}
                        onClick={() => {
                            this.props.handleChose('XỈU')
                        }}
                    >Xỉu</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mangXucXac: state.GameXucXacReducer.mangXucXac,
        tongDiem: state.GameXucXacReducer.tongDiem,
        stopRandom : state.GameXucXacReducer.stopRandom
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleChose: (chose) => {
            dispatch({
                type: 'HANDLE_CHOSE',
                chose
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BanCuoc);