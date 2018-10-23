import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logOutSuccess} from "../actions/sessionActions.js"
// import { Button, Card, Row, Col } from 'materialize-css';

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
		})
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
		// this.props.addNewClass(this.state)
		let formData = this.state;
		formData.studio_id = this.props.currentAdmin.studios[0].id

		fetch("http://localhost:3000/api/v1/fitness_classes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData)
		}).then(resp => resp.json())
			.then(data => this.props.addNewClass(data))
	}
	
	render() {

		console.log(this.props.currentAdmin)
		return this.props.currentAdmin.name ? 
		 (
			<div>
		{		<h3>Welcome, {this.props.currentAdmin.name}</h3>}
				<Link to="/">
					<button onClick={this.props.handleLogOut}>Log Out</button>
				</Link>
				<h1>Enter a new class</h1>
				<form onSubmit={this.handleSubmit}>
						<input type="hidden" name="studio_id" value={this.props.currentAdmin.studios[0].id} /> 
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
				<h1>Add Details to Class</h1>
				<form onSubmit={this.handleDetailSubmit}>
						<input type="hidden" name="studio_id" value={this.props.currentAdmin.studios[0].id} />
						<div><label>Select the Class</label>
						
						<select>
					{
								// this.props.currentAdmin.map(function(fc) {
								// 	return <option value={fc.name}>{fc.name}</option>
								// })
							}
						</select></div>
						<div><label>Instructor Name</label>
						<input name="name" type="text" onChange={this.handleChange} value={this.state.name}/></div>
						<div><label>Date/Time</label>
						<input name="time" type="datetime-local" onChange={this.handleChange} value={this.state.time}/></div>
					<div><input type="submit" /></div>
				</form>
			</div>
		) : 
		 (<p> Loading </p>)
	}
}

const mapStateToProps = (state) => {
	return {
		currentAdmin: (state.currentAdmin)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewClass: (formData) => dispatch({type: "ADD_NEW_CLASS", payload: formData}),
		handleLogOut: () => dispatch({type: "LOG_OUT_SUCCESS"})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewClassForm);



