import React, { Component } from 'react';

class Demo extends Component {
    render() {
        return (
            <div>
                <nav className="nav justify-content-center">
                    <a className="nav-link active" href="#">Active link</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link disabled" href="#">Disabled link</a>
                </nav>
            </div>
        );
    }
}

export default Demo;
