import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import './index.css';
import App from './modules/App';
import About from './modules/About/About';
import Home from './modules/Home/Home';
import Examples from './modules/Examples/Examples';

ReactDOM.render((
    <HashRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">Index</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/examples">Examples</Link>
                </li>
            </ul>
            <Route exact path="/" component={ App }></Route>
            <Route path="/about" component={ About }></Route>
            <Route path="/home" component={ Home }></Route>
            <Route path="/examples" component={ Examples }></Route>
        </div>
    </HashRouter>
), document.getElementById('root'));
