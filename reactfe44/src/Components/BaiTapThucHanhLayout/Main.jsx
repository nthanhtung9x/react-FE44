import React, { Component } from 'react';
import HeaderComponent from './Header';
import CarouselComponent from './Carousel';
import ProductListComponent from './ProductList';
import FooterComponent from './Footer';
import SidebarComponent from './Sidebar';

class Main extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="container-fluid" style={{margin: '80px auto 24px'}}>
                    <div className="row">
                        <div className="col-3">
                            <SidebarComponent/>
                        </div>
                        <div className="col-7">
                            <CarouselComponent/>
                            <ProductListComponent/>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}

export default Main;