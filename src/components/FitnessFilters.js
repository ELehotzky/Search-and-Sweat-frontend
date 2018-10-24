import React, { Component } from 'react';
import {connect} from "react-redux";
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from "react-bootstrap";



class FitnessFilters extends Component {

	render() {
		return (
			<div>
				<ButtonToolbar>
					<ToggleButtonGroup type="checkbox">
					<ToggleButton onChange={this.props.handleOnChange} value="cardio" name="cardio">Cardio</ToggleButton>
					<ToggleButton onChange={this.props.handleOnChange} value="spin" name="cardio">Spin</ToggleButton>
					<ToggleButton onChange={this.props.handleOnChange} value="pilates" name="cardio">Pilates</ToggleButton>
					<ToggleButton onChange={this.props.handleOnChange} value="circuit_training" name="cardio">Circuit Training</ToggleButton>
					<ToggleButton onChange={this.props.handleOnChange} value="kickboxing" name="cardio">Kickboxing</ToggleButton>
					<ToggleButton onChange={this.props.handleOnChange} value="yoga" name="cardio">Yoga</ToggleButton>
					<ToggleButton onChange={this.props.handleOnChange} value="boxing" name="cardio">Boxing</ToggleButton>
					<ToggleButton onChange={this.props.handleOnChange} value="rowing" name="cardio">Rowing</ToggleButton>
					<ToggleButton onChange={this.props.handleOnChange} value="barre" name="cardio">Barre</ToggleButton>
					<ToggleButton onChange={this.props.handleOnChange} value="strength_training" name="cardio">Strength Training</ToggleButton>
					</ToggleButtonGroup>
				</ButtonToolbar>
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