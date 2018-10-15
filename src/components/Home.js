import React from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class Home extends React.Component {
	
	handleClick = (event) => {
	console.log(event.type);
	}

	render() {
	return (
	    <div>
		    <h1>Home!</h1>
		    <div>
		    	<NavLink to="/classes">
		    	<button onClick={this.handleClick}>Explore Classes</button>
		    	</NavLink>
		    </div>
	    </div>
	    )
	}
}

export default Home;