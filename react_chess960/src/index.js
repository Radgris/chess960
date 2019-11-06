import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';


import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root'

const store = Redux.createStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
