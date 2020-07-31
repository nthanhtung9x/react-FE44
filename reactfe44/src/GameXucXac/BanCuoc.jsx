import React, { Component } from 'react';
import { connect } from 'react-redux';

class BanCuoc extends Component {
    render() {
        let renderXucXac = this.props.mangXucXac.map((item, index) => {
            return <img src={item.img} alt={item.ma} width="100" height="100" key={index}/>
        })
        return (
            <div className="pt-5">
                <h1 className="text-center pb-4">Game Xúc Xắc</h1>
                <div className="d-flex align-items-center justify-content-between">
                    <button className="btn border-dark bg-danger text-white" style={{
                        width:'200px',
                        height:'200px',
                        fontSize:'42px',
                        borderWidth:'4px'
                    }}>Tài</button>
                    <p className="text-center">
                        {renderXucXac}
                    </p>
                    <button className="btn border-dark bg-warning text-white" style={{
                        width:'200px',
                        height:'200px',
                        fontSize:'42px',
                        borderWidth:'4px'
                    }}>Xỉu</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mangXucXac: state.GameXucXacReducer.mangXucXac
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BanCuoc);