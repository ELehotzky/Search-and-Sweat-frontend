import React from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

class Home extends React.Component {

	render() {
	return (
	    <div>
		    <h1>Home!</h1>
		    <div>
		    	<NavLink to="/classes">
		    	<Button bsStyle="success" bsSize="large" block>Explore Classes</Button>
		    	</NavLink>
		    </div>
	    </div>
	    )
	}
}

export default Home;