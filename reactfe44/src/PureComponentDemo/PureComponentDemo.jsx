import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class PureComponentDemo extends Component {
    state = {
        number: 1,
        user:{
            name: "hello"
        }
    }
    
    // //  Lifecycle của Component, chứ không còn của PureComponent.
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(this.state.user)
    //     console.log('nextprops', nextProps);
    //     console.log('nextstate', nextState);
    // }

    render() {
        return (
            <div>
                <ChildComponent user={this.state.user}/>
                <br/>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.setState({number: this.state.number + 1})}>+</button>
                <h1>{this.state.user.name}</h1>
                <button onClick={() => {
                    //Tạo 1 object trong vùng nhớ mới để purecomponent nhận ra được sự thay đổi.
                    let user = {...this.state.user};
                    user.name = "Nguyễn văn a";
                    this.setState({
                        user
                    })
                }}>+</button>

            </div>
        );
    }
}

export default PureComponentDemo;