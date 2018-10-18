import React, { Component } from 'react';
import {connect} from "react-redux";

class NewClassForm extends Component {
	
	state = {
		classes: []
	}

	handleChange = (event) => {
		this.setState({
			classes: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addNewClass(this.state)
	}


	render() {
		return (
			<div>
				<h1>Enter a new class</h1>
				<form onSubmit={this.handleSubmit}>
						<div><label>Class Name</label>
						<input name="name" type="text" onChange={this.handleChange} value={this.state.text}/></div>
						<div><label>Description</label>
						<input name="description" type="text" onChange={this.handleChange} value={this.state.text}/></div>
						<div><label>Drop-in Price</label>
						<input name="price" type="number" onChange={this.handleChange} /></div>
						<div><label>Class length</label>
						<input name="class_length" type="number" onChange={this.handleChange} value={this.state.number}/></div>
						<div><label>Date/Time</label>
						<input name="time" type="datetime-local" onChange={this.handleChange} /></div>
						<div><label>Select Class Type(s): </label></div>
						Cardio<input name="cardio" type="checkbox" onChange={this.handleChange} />
						Spin<input name="spin" type="checkbox" onChange={this.handleChange} />
						Pilates<input name="pilates" type="checkbox" onChange={this.handleChange} />
						Circuit Training<input name="circuit_training" type="checkbox" onChange={this.handleChange} />
						Kickboxing<input name="kickboxing" type="checkbox" onChange={this.handleChange} />
						Yoga<input name="yoga" type="checkbox" onChange={this.handleChange} />
						Boxing<input name="boxing" type="checkbox" onChange={this.handleChange} />
						Rowing<input name="rowing" type="checkbox" onChange={this.handleChange} />
						Barre<input name="barre" type="checkbox" onChange={this.handleChange} />
						Strength Training<input name="strength_training" type="checkbox" onChange={this.handleChange} />

					<div><input type="submit" /></div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewClass: (formData) => dispatch({type: "ADD_NEW_CLASS", payload: formData})
	}
}

export default connect(null, mapDispatchToProps)(NewClassForm);



