import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Website.</h1>
        </header>
        <p className="App-intro">
          这是一个个人网站的一次测试。
        </p>
      </div>
    );
  }
}

export default App;
