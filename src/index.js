import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger as loggerMiddleware } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import rootReducer from './models/reducers'

// const store = createStore(rootReducer, applyMiddleware(
//     loggerMiddleware,
//     thunkMiddleware
// ))
ReactDOM.render(
    // <Provider store={store}>
        <App />
    // </Provider>
    , document.getElementById('root'));
registerServiceWorker();
