import React, { Component } from 'react';
import {connect} from "react-redux";

class NewClassForm extends Component {
	
	state = {
		name: '',
		description: '',
		price: '',
		class_length: '',
		time: '',
		categories: []
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		}, () => console.log(this.state))
	}

	handleCheckbox = (e) => {
		if (e.target.checked) {
		this.setState({
			categories: [...this.state.categories, e.target.name]
		}, () => console.log(this.state))
	} else {
		let unchecked = e.target.name
		this.setState({ 
			categories: this.state.categories.filter((unchecked, i) => i)
		}, () => console.log(this.state))
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addNewClass(this.state)
		let formData = this.state;

		fetch("http://localhost:3000/api/v1/fitness_classes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(formData)
		}).then(resp => resp.json())
			.then(data => console.log("success" + data))
	}

	render() {
		return (
			<div>
				<h1>Enter a new class</h1>
				<form onSubmit={this.handleSubmit}>
						<div><label>Class Name</label>
						<input name="name" type="text" onChange={this.handleChange} value={this.state.name}/></div>
						<div><label>Description</label>
						<textarea name="description" onChange={this.handleChange} value={this.state.description}/></div>
						<div><label>Drop-in Price</label>
						<input name="price" type="number" onChange={this.handleChange} value={this.state.price}/></div>
						<div><label>Class length</label>
						<input name="class_length" type="number" onChange={this.handleChange} value={this.state.class_length}/></div>
						<div><label>Date/Time</label>
						<input name="time" type="datetime-local" onChange={this.handleChange} value={this.state.time}/></div>
						<div><label>Select Class Type(s): </label></div>
						Cardio<input name="cardio" type="checkbox" onChange={this.handleCheckbox} value={this.state.cardio} />
						Spin<input name="spin" type="checkbox" onChange={this.handleCheckbox} value={this.state.spin} />
						Pilates<input name="pilates" type="checkbox" onChange={this.handleCheckbox} value={this.state.pilates} />
						Circuit Training<input name="circuit_training" type="checkbox" onChange={this.handleCheckbox} value={this.state.circuit_training} />
						Kickboxing<input name="kickboxing" type="checkbox" onChange={this.handleCheckbox} value={this.state.kickboxing} />
						Yoga<input name="yoga" type="checkbox" onChange={this.handleCheckbox} value={this.state.yoga} />
						Boxing<input name="boxing" type="checkbox" onChange={this.handleCheckbox} value={this.state.boxing} />
						Rowing<input name="rowing" type="checkbox" onChange={this.handleCheckbox} value={this.state.rowing} />
						Barre<input name="barre" type="checkbox" onChange={this.handleCheckbox} value={this.state.barre} />
						Strength Training<input name="strength_training" type="checkbox" onChange={this.handleCheckbox} value={this.state.strength_training} />

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



