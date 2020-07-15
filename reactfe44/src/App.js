import React, { Component } from 'react';
import Demo from './Components/DemoComponents/Demo';
import DemoClass from './Components/DemoComponents/DemoClass';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import Main from './Components/BaiTapThucHanhLayout/Main';
import EventBinding from './EventBinding/EventBinding';
import HandleState from './HandleState/HandleState';
import BaiTapChonXe from './HandleState/BaiTapChonXe';
class App extends Component {
  render() {
    return (
      <div>
        {/* <Demo/>
        <DemoClass/> */}
        {/* <BaiTapLayout/> */}
        {/* <DataBinding/> */}
        <Main/>
        {/* <EventBinding/> */}
        {/* <HandleState/> */}
        {/* <BaiTapChonXe/> */}
      </div>
    );
  }
}

export default App;