import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo} from './actions/action';
import {receiveTodos} from './actions/action';
import App from './components/app';
import Root from './components/root';
import {connect} from 'react-redux';


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render( <Root store={store}/>, document.getElementById('root'));


});

window.store = configureStore();
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
