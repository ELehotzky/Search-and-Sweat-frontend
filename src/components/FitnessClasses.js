import React from "react";
// import FitnessClass from "./FitnessClass.js"
import classApi from "../api/classApi.js"
import {connect} from "react-redux"

class FitnessClasses extends React.Component {
  
	componentDidMount(){
		classApi.getAllClasses()
		.then(data => {
			this.props.updateClasses(data)
		})
	}

	mapCategories(oneClass) {

	return (
			oneClass.fitness_class_categories.map((oneClass, index) => (
				<p>{oneClass.categoryName}</p>
			)))
	
}


	render() {
		if (this.props.FitnessClasses.length < 1) {
			return (
				<div>Loading...</div>)
		} else 
		return (
			<div>
				<h1>Classes Page</h1> 
		 		<ul>{this.props.FitnessClasses.map((oneClass, index) => (
						<li key={index}>
							<h2>{oneClass.name}</h2>
							<p>{oneClass.studio.name} -- ${oneClass.price}</p>
							<p>{this.mapCategories(oneClass)}</p>
						 	<div>- {oneClass.description}</div>
						</li>
				))}
				</ul>
		 	</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		FitnessClasses: state.FitnessClasses
	}
}

function updateClasses(data) {
	return {
		type: "ADD_CLASSES", payload: data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		updateClasses: (data) => dispatch(updateClasses(data))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(FitnessClasses)