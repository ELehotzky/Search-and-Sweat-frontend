import React from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import { Button, Card, Row, Col } from 'materialize-css';

class Home extends React.Component {

	render() {
	return (
	    <div>
		    <h1>Home!</h1>
		    <div>
		    	<NavLink to="/classes">
		    	<button waves='light'>Explore Classes</button>
		    	</NavLink>
		    </div>
	    </div>
	    )
	}
}

export default Home;