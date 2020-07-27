import React, { Component } from 'react';
import { connect } from 'react-redux';

class DanhSachCuoc extends Component {

    renderList = () => {
        return this.props.list.map((item, index) => {
            return  <div className="col-4 text-center" key={index}>
                        <img src={item.img} alt={item.ten}/>
                        <button className="btn btn-success my-2" onClick={() => {
                            this.props.handleChange(item.ma, 10)
                        }}>Cược: {item.cuoc}</button>
                    </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.BaiTapGameBauCuaReducer.list
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleChange: (ma, tienCuoc) => {
            dispatch({
                type: 'HANDLE_CHANGE',
                ma,
                tienCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DanhSachCuoc);