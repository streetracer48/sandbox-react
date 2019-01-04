import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import promiseMidlleware from 'redux-promise';
import ReduxThunk from  'redux-thunk';

import './Resources/css/styles.css'
import Routes from './routes';
import Reducer from './reducers/';

const createStoreWithMiddleware = applyMiddleware(promiseMidlleware,ReduxThunk)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
    </Provider>
, document.getElementById('root'));


