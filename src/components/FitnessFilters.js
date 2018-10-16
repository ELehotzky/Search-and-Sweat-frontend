import React, { Component } from 'react';
import {connect} from "react-redux";
class FitnessFilters extends Component {

	render() {
		return (
			<div>
				<input onChange={this.props.handleOnChange} type="checkbox" name="cardio"/>Cardio
				<input onChange={this.props.handleOnChange} type="checkbox" name="yoga"/>Yoga
				<input onChange={this.props.handleOnChange} type="checkbox" name="pilates"/>Pilates
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleOnChange: (e) => dispatch(handleOnChange(e))
	}
}


function handleOnChange (e) {
		console.log(e.target.name)
		if (e.target.checked) {
			return {type: "ADD_TO_FILTER", payload: e.target.name}
		}
		else {
			return {type: "REMOVE_FROM_FILTER", payload: e.target.name}
		}
	}

export default connect(null, mapDispatchToProps)(FitnessFilters);