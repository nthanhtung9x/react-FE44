import React, { Component } from 'react';
import BTHeader from './BTHeader';
import BTCarousel from './BTCarousel';
import BTProductList from './BTProductList';
import BTPromotion from './BTPromotion';

class BaiTapLayout extends Component {
    render() {
        return (
            <div className="bg-dark">
                <BTHeader/>
                <BTCarousel/>
                <BTProductList/>
                <BTPromotion/>
            </div>
        );
    }
}

export default BaiTapLayout;