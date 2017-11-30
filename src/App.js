import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let v = {
      __html: '<script src="http://localhost:8081/target/target-script-min.js#anonymous"></script>'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React1111</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload11221111.
        </p>
        <h1 dangerouslySetInnerHTML={v}/>
      </div>
    );
  }
}

export default App;
