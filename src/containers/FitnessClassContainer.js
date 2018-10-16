import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import FitnessClasses from "../components/FitnessClasses.js"
import FitnessFilters from "../components/FitnessFilters.js"

export default class FitnessClassContainer extends Component {
	render() {
		return (
			<div>
				<FitnessFilters />
				<FitnessClasses />
			</div>
			)
	}


}