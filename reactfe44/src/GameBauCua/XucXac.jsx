import React, { Component } from 'react';
import { connect } from 'react-redux';

class XucXac extends Component {

    showAlert = () => {
        if(this.props.result < 0) {
            alert(`Bạn lỗ ${Math.abs(this.props.result)} $`);
        } else if(this.props.result > 0) {
            alert(`Bạn lãi ${Math.abs(this.props.result)} $`)
        } else {
            alert(`Huề tiền`);
        }
    };

    render() {
        return (
            <>
                <div 
                    style={{
                        width:'300px',
                        height:'300px',
                        borderRadius:'50%',
                        backgroundColor:'white',
                        margin:'auto',
                        position:'relative'
                    }}
                >
                    <img src={this.props.list[0].img} alt={this.props.list[0].ma} width="70" height="70" style={{
                        position:'absolute',
                        top:'30%',
                        left:'20%',
                        transform:'translateY(-50%)',
                    }}/>
                    <img src={this.props.list[1].img} alt={this.props.list[1].ma} width="70" height="70" style={{
                        position:'absolute',
                        top:'30%',
                        left:'50%',
                        transform:'translateY(-50%)'
                    }}/>
                    <img src={this.props.list[2].img} alt={this.props.list[2].ma} width="70" height="70" style={{
                        position:'absolute',
                        top:'65%',
                        left:'50%',
                        transform:'translate(-50%, -50%)'
                    }}/>
                </div>
                <div className="mt-4">
                    <button disabled={this.props.visible ? true : false} onClick={async() => {
                            await this.props.handlePlay(true);
                            setTimeout(() => {
                                this.showAlert();
                            },1000);
                        }}>
                        <img src="./images/soc.png" alt="soc" width="200" />
                    </button>
                </div>   
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.BaiTapGameBauCuaReducer.XucXac,
        visible: state.BaiTapGameBauCuaReducer.visible,
        result: state.BaiTapGameBauCuaReducer.result
    }
};

const mapDispatchToProps = (dispatch, action) => {
    return {
        handlePlay: (visible) => {
            dispatch({
                type: 'HANDLE_PLAY',
                visible
            })
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(XucXac);