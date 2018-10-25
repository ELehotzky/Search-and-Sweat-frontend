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
						<h1 style={{"color": "#59CD90"}}>Search for a Class</h1>
					</header>
				</div>
			</div>
			<form>
				<FormGroup>
					<Checkbox inline onChange={this.props.handleOnChange} name="cardio"><h4 className="check">Cardio</h4></Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="spin"><h4 className="check">Spin</h4></Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="pilates"><h4 className="check">Pilates</h4></Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="circuit_training"><h4 className="check">Circuit Training</h4></Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="kickboxing"><h4 className="check">Kickboxing</h4></Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="yoga"><h4 className="check">Yoga</h4></Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="boxing"><h4 className="check">Boxing</h4></Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="rowing"><h4 className="check">Rowing</h4></Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="barre"><h4 className="check">Barre</h4></Checkbox>
					<Checkbox inline onChange={this.props.handleOnChange} name="strength_training"><h4 className="check">Strength Training</h4></Checkbox>
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