import React, { Component } from 'react';

class EventBinding extends Component {
    handleClick = () => {
        alert('hello');
    }

    showMessage = message => {
        alert('hello' + message);
    }

    render() {
        return (
            <div>
                {/* Cách 1: truyền trực tiếp callback function */}
                <button onClick={this.handleClick}>Click me!</button>
                <button onClick={this.showMessage.bind(this,'hao')}>Click me!!</button>
                
                
                {/* Cách 2: truyền function gián tiếp */}
                <button 
                    onClick={() => {
                        this.handleClick();
                    }}
                >
                    Click me!
                </button>

                <button onClick={() => {
                    this.showMessage('hao');
                }}
                >Click</button>
            </div>
        );
    }
}

export default EventBinding;