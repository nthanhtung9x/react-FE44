import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <nav style={{borderTop:'2px solid #007BFF'}} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <div className="row w-100">
                            <div className="col-3">
                                <a className="navbar-brand pl-2" href="#">Start Bootstrap</a>
                            </div>
                            <div className="col-8">
                                <ul className="navbar-nav justify-content-end" style={{marginRight:'80px'}}>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}

export default HeaderComponent;