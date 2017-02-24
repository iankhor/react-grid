import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGridLayout from 'react-grid-layout' 


class App extends Component {
  render() {

    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    return (
      <div className="">
        <div className="">
          <h2>React Grid Layout playground</h2>
        </div>

      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={'a'}>Static</div>
        <div key={'b'}>Resizable</div>
        <div key={'c'}>Resizable</div>
      </ReactGridLayout>

      </div>
    );
  }
}

export default App;
