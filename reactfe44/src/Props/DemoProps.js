import React, { Component } from 'react';
import Child from './Child';

class DemoProps extends Component {
    render() {
        let product = {
            id: 1,
            name: 'Iphone X',
            price:1000,
            image: 'https:picsum.photos/200/200'
        }
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col-4">
                        <Child product={product}/>
                    </div>
                    <div className="col-4">
                        <Child product={product}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoProps;