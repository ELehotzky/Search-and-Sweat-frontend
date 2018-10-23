import React from "react";
import {BrowserRouter as NavLink} from "react-router-dom";
import { Button, Card, Row, Col } from 'react-materialize';

class Home extends React.Component {

	render() {
	return (
	    <div>
		    <h1>Home!</h1>
		    <div>
		    	<NavLink to="/classes">
		    	<Button waves='light'>Explore Classes</Button>
		    	</NavLink>
		    </div>
	    </div>
	    )
	}
}

export default Home;