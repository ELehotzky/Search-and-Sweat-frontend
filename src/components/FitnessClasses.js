import React from "react";
import FitnessClass from "./FitnessClass.js"
import classApi from "../api/classApi.js"
import {connect} from "react-redux"


class FitnessClasses extends React.Component {
  
	componentDidMount(){
		classApi.getAllClasses()
		.then(data => {
			this.props.updateClasses(data)
		})
	}

	render() {
		console.log(this.props.FitnessClasses)
		return (
			<div>
				<h1>Classes Page</h1>
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
	return {type: "ADD_CLASSES", payload: data}
}

function mapDispatchToProps(dispatch) {
	return {
		updateClasses: (data) => dispatch(updateClasses(data))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(FitnessClasses)