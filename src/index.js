import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose } from "redux";
import reducer from './Reducer';
// import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { BrowserRouter } from 'react-router-dom';
import { thunk } from 'redux-thunk';
// import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
   reducer
  });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
       
//     </Provider>
//   </React.StrictMode>
// );
