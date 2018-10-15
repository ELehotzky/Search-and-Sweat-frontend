import React from "react";
import {connect} from "react-redux";

class FitnessClass extends React.Component {

	render() {
		return (
			<div className="classTile">
				<h2>{this.props.name}</h2>
			</div>
			)
	}

} 

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect(null, mapDispatchToProps)(FitnessClass)