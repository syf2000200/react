import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to App</h1>
                </header>
                <h1>App</h1>
            </div>
        );
    }
}

export default App;
