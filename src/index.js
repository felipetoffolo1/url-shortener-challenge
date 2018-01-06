import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import shortenApp from "./reducers";
import thunk from "redux-thunk";


let store = createStore(shortenApp, applyMiddleware(thunk));


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, document.getElementById('root'));
registerServiceWorker();
