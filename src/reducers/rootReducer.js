import * as types from "../actions/actionTypes.js"
import {createBrowserHistory as browserHistory} from "history";

let defaultState = {
	FitnessClasses: [],
	Filters: [],
	currentAdmin: {},
	isLoggedIn: false
}

export default function rootReducer (state = defaultState, action) {
	switch (action.type) {

		case "ADD_CLASSES":
			return {...state, FitnessClasses: action.payload}

		// case "FILTER_CLASSES":
		// 	return {...state, FitnessClasses: action.payload.filter(fitnessClass => {
		// 		return fitnessClass.fitness_class_categories.some(category => {
		// 			return (category.categoryName==="Yoga")
		// 		})
		// 	})}

		case "LOG_IN_SUCCESS": 
			console.log(!!localStorage.token)
			// browserHistory.push("/")
			return {...state, currentAdmin: action.payload, isLoggedIn: true}

		case "LOG_OUT_SUCCESS":
			localStorage.token = "";
			return {...state, currentAdmin: {}, isLoggedIn: false}

		case "ADD_NEW_CLASS":
			console.log(action.payload)
			console.log({FitnessClasses: state.FitnessClasses.concat(action.payload.text) });
			return {FitnessClasses: state.FitnessClasses.concat(action.payload.text) }

		case "ADD_TO_FILTER":
			return {...state, Filters: [...state.Filters, action.payload]}
		
		case "REMOVE_FROM_FILTER":
			let filteredClasses = state.Filters.filter(fitnessClass => fitnessClass !== action.payload)
			return {...state, Filters: filteredClasses}

		default: 
		return state;
	}
}