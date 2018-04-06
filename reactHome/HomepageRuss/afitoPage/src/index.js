import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderComponent from './header/Header';
import NavComponent from './nav/Nav';
import HomePageComponent from './body/HomePage';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HeaderComponent />, document.getElementById('root'));
ReactDOM.render(<NavComponent />, document.getElementById('nav'));
ReactDOM.render(<HomePageComponent />, document.getElementById('body'));
registerServiceWorker();
