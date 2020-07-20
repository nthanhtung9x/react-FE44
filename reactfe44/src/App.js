import React, { Component } from 'react';
import Demo from './Components/DemoComponents/Demo';
import DemoClass from './Components/DemoComponents/DemoClass';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import Main from './Components/BaiTapThucHanhLayout/Main';
import EventBinding from './EventBinding/EventBinding';
import HandleState from './HandleState/HandleState';
import BaiTapChonXe from './HandleState/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import EXRender from './RenderWithMap/EXRender';
import DemoProps from './Props/DemoProps';
import BT2ProductList from './Props/BT2ProductList/BT2ProductList';
import DemoPropsFunction from './Props/DemoPropsFunction/DemoPropsFunction';
import BTGioHang from './Props/BaiTapGioHangProps/BTGioHang';

import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        {/* <Demo/>
        <DemoClass/> */}
        {/* <BaiTapLayout/> */}
        {/* <DataBinding/> */}
        {/* <Main/> */}
        {/* <EventBinding/> */}
        {/* <HandleState/> */}
        {/* <BaiTapChonXe/> */}
        {/* <RenderWithMap/> */}
        {/* <EXRender/> */}
        {/* <DemoProps/> */}
        {/* <BT2ProductList/> */}
        {/* <DemoPropsFunction/> */}
        <BTGioHang/>
      </div>
    );
  }
}

export default App;