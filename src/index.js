import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Functional} from "./pages/Functional";
import Clazz from "./pages/Clazz";

ReactDOM.render(
    <Router>
      <Route exact path={'/'} component={App}/>
      <Route exact path={'/func'} component={Functional}/>
      <Route       path={'/func/await/:num'} component={Functional}/>
      <Route exact path={'/class'} component={Clazz}/>
      <Route       path={'/class/await/:num'} component={Clazz}/>
    </Router>, document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
