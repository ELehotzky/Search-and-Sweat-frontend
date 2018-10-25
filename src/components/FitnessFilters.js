import React, { Component } from 'react';
import {connect} from "react-redux";
import {FormGroup, Checkbox} from "react-bootstrap";



class FitnessFilters extends Component {

	render() {
		return (
			<div>
			<div id="header" style={{"height": "25%"}}>
				<div className="inner">
					<header>
						<h1>Search for a Class</h1>
					</header>
				</div>
			</div>
			<form>
				<FormGroup>
					<a className="check"><Checkbox inline onChange={this.props.handleOnChange} name="cardio">Cardio</Checkbox></a>
					<a className="check"><Checkbox inline onChange={this.props.handleOnChange} name="spin">Spin</Checkbox></a>
					<a className="check"><Checkbox inline onChange={this.props.handleOnChange} name="pilates">Pilates</Checkbox></a>
					<a className="check"><Checkbox inline onChange={this.props.handleOnChange} name="circuit_training">Circuit Training</Checkbox></a>
					<a className="check"><Checkbox inline onChange={this.props.handleOnChange} name="kickboxing">Kickboxing</Checkbox></a>
					<a className="check"><Checkbox inline onChange={this.props.handleOnChange} name="yoga">Yoga</Checkbox></a>
					<a className="check"><Checkbox inline onChange={this.props.handleOnChange} name="boxing">Boxing</Checkbox></a>
					<a className="check"><Checkbox inline onChange={this.props.handleOnChange} name="rowing">Rowing</Checkbox></a>
					<a className="check"><Checkbox inline onChange={this.props.handleOnChange} name="barre">Barre</Checkbox></a>
					<a className="check"><Checkbox inline onChange={this.props.handleOnChange} name="strength_training">Strength Training</Checkbox></a>
				</FormGroup>
			</form>
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
		console.log(e.target.checked)
		if (e.target.checked) {
			return {type: "ADD_TO_FILTER", payload: e.target.name}
		}
		else {
			return {type: "REMOVE_FROM_FILTER", payload: e.target.name}
		}
	}

export default connect(null, mapDispatchToProps)(FitnessFilters);