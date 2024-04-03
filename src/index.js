import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from './Reducer';
import { combineReducers } from "redux";
import { BrowserRouter } from 'react-router-dom';
import {thunk} from 'redux-thunk';



const rootReducer = combineReducers({
  reducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap your app inside a root element
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
