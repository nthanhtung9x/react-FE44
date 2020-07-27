import React, { Component } from 'react';
import { connect } from 'react-redux';

class XucXac extends Component {

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
                        transform:'translateY(-50%)'
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
                    <button>
                        <img src="./images/soc.png" alt="soc" width="200" onClick={() => {
                            this.props.handlePlay(Math.random()*12,Math.random()*12,Math.random()*12)
                        }}/>
                    </button>
                </div>   
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.BaiTapGameBauCuaReducer.XucXac
    }
};

const mapDispatchToProps = (dispatch, action) => {
    return {
        handlePlay: (num1,num2,num3) => {
            dispatch({
                type: 'HANDLE_PLAY',
                num1,
                num2,
                num3
            })
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(XucXac);