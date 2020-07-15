import React, { Component } from 'react';

class BaiTapChonXe extends Component {

    state = {
        color:'red'
    }

    handleChangeColor = (color) => {
        this.setState({
            color
        })
    };

    renderCar = () => {
        return <img src={`./images/${this.state.color}-car.jpg`} alt="" style={{width:'100%'}}/>
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Hình ảnh xe:</h1>
                        {this.renderCar()}
                    </div>
                    <div className="col-6">
                        <h1>Chọn màu:</h1>
                        <button className="btn btn-danger mr-2" onClick={() => {
                            this.handleChangeColor('red')
                        }}>Màu đỏ</button>
                        <button className="btn btn-secondary mr-2" onClick={() => {
                            this.handleChangeColor('silver')
                        }}>Màu bạc</button>
                        <button className="btn btn-dark mr-2" onClick={() => {
                            this.handleChangeColor('black')
                        }}>Màu đen</button>
                        <button className="btn btn-light mr-2" onClick={() => {
                            this.handleChangeColor('steel')
                        }}>Màu bóng</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapChonXe;