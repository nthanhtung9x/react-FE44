import React, { Component } from 'react';

class SidebarComponent extends Component {
    render() {
        return (
            <div className="py-2 px-4">
                <h1 className="mb-4">Shop Name</h1>
                <div className="list-group">
                    <a href="/" class="list-group-item list-group-item-action active">Category 1</a>
                    <a href="/" class="list-group-item list-group-item-action">Category 2</a>
                    <a href="/" class="list-group-item list-group-item-action">Category 3</a>
                </div>
            </div>
        );
    }
}

export default SidebarComponent;