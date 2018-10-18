import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {reducer as formReducer} from "redux-form";
import rootReducer from "./reducers/rootReducer.js";
import './index.css';
import App from './containers/App';
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';


const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
	);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
