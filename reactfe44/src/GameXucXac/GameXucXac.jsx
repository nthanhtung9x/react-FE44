import React, { Component } from 'react';
import BanCuoc from './BanCuoc';
import KetQuaTroChoi from './KetQuaTroChoi';
import styleXucXac from './GameXucXac.module.css';
class GameXucXac extends Component {
    render() {
        return (
            <div 
                style={{backgroundImage:'url("./images/bgGame.png")', width:'100%',height:'100vh'}}
                className={styleXucXac.gameXucXac}
            >

                <div className="container">
                    <BanCuoc/>
                    <KetQuaTroChoi/>
                </div>
            </div>
        );
    }
}

export default GameXucXac;