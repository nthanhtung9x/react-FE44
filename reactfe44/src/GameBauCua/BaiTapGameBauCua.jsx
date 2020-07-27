import React, { Component } from 'react';
import style from './BaiTapGameBauCua.module.css';
import TienThuong from './TienThuong';
import DanhSachCuoc from './DanhSachCuoc';
import XucXac from './XucXac';

class BaiTapGameBauCua extends Component {
    render() {
        return (
            <div className={`bg-warning w-100 ${style.gameBauCua}`} style={{height:'100vh'}}>
                <div className="container">
                    <div className="text-center pt-2">
                        <img src="./images/logo.png" alt="ga" width="400"/>
                        <br/>
                        <TienThuong/>
                    </div>
                    <div className="row">
                        <div className="col-7">
                           <DanhSachCuoc/>
                        </div>
                        <div className="col-5 text-center">
                            <XucXac/>   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapGameBauCua;