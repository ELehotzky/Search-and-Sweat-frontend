import React from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class Home extends React.Component {

	render() {
	return (
		<div id="page-wrapper">
			<div id="header">
				<div className="inner">
					<header>
						<h1 id="logo">Search & Sweat</h1>
						<hr />
						<p>Find your local fitness classes</p>
					</header>
					<NavLink to="/classes">
						<footer>
						<div className="button circled scrolly">Explore</div>
						</footer>
					</NavLink>
				</div>
			</div>
		</div>
	    )
	}
}

export default Home;