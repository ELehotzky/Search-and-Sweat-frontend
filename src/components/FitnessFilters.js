import React, { Component } from 'react';
import {connect} from "react-redux";
import {FormGroup, Checkbox} from "react-bootstrap";



class FitnessFilters extends Component {

	render() {
		return (
			<form>
				<FormGroup>
					<Checkbox inline onChange={this.props.handleOnChange} name="cardio">Cardio</Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="spin">Spin</Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="pilates">Pilates</Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="circuit_training">Circuit Training</Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="kickboxing">Kickboxing</Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="yoga">Yoga</Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="boxing">Boxing</Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="rowing">Rowing</Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="barre">Barre</Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="strength_training">Strength Training</Checkbox>
				</FormGroup>
			</form>
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
		console.log(e.target.checked)
		if (e.target.checked) {
			return {type: "ADD_TO_FILTER", payload: e.target.name}
		}
		else {
			return {type: "REMOVE_FROM_FILTER", payload: e.target.name}
		}
	}

export default connect(null, mapDispatchToProps)(FitnessFilters);