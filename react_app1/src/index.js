import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
//import {legacy_createStore as createStore } from 'redux'
//import reducer from './Counter/CounterStore';
//import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
//import App from './App';


import store from './PostsApp/store';
import App from './PostsApp/App';
//import { applyMiddleware } from 'redux';

//import  {thunk}  from 'redux-thunk';


const root = ReactDOM.createRoot(document.getElementById('root'));


/*const store = createStore(
  reducer,composeWithDevTools(applyMiddleware(thunk))
  
);
*/
  root.render(
  <Provider store={store}>
  
    <App />
  
  </Provider>
);


