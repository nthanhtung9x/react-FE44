import React, { Component } from 'react';

class ReactLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
        console.log('contructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')

        return null; // Trả về state mới
    };



    render() {
        console.log('render');
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
                {this.state.number}
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(newProps, newState) {
        console.log('componentDidUpdate');  
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default ReactLifeCycle;