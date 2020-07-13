import React, { Component } from 'react';
import cssDataBinding from './DataBinding.module.css';

class DataBinding extends Component {

    // thuộc tính
    name = "FE 44";
    img = 'https://picsum.photos/300/300';
    // phương thức
    renderImg = () => {
        let obStyle = {fontWeight:'bold'};
        return <div className={`card w-25 ${cssDataBinding.item}`}>
                    <img className="card-img-top" src={this.img} alt="" />
                    <div className="card-body">
                        <h4 className="card-title" style={obStyle}>Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
    }

    render() {
        // binding biến
        let url = 'https://picsum.photos/200/200';
        // binding hàm
        let renderText = () => {

            // trả về chuỗi hoặc số hoặc đoạn jsx.
            return <div>
                <h1>hello 123</h1>
            </div>
        }
        return (
            <div>
               <img src={url} alt=""></img>
               {renderText()}
               {this.name}
               {this.renderImg()}
            </div>
        );
    }
}

export default DataBinding;