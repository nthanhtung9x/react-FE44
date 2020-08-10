import React, { Component, PureComponent } from 'react';

class ChildComponent extends Component {

    // PureComponent chỉ nhận biết được sự thay đổi của các kiểu dữ liệu cơ sở, chứ không nhận biết được Object, Array.
    //  Lifecycle của Component, chứ không còn của PureComponent.
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.user.name !== this.props.user.name) {
            return true;
        }
        return false;
    }

    
    render() {
        console.log(1);
        return (
            <div>
                <nav className="bg-dark nav justify-content-center">
                    <a className="nav-link active" href="#">Active link</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link" href="#">Disabled link</a>
                </nav>                
                <h1>{this.props.user.name}</h1>
            </div>
        );
    }
}


export default ChildComponent;