import React, {Component} from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

export default class Navbar extends Component {

	render() {
		return(
			<div id="page-wrapper">
	            <nav id="nav">
	              <ul>
				    <li><NavLink
				      to="/"
				      exact
				      >Home</NavLink></li>
				    <li><NavLink
				      to="/about"
				      exact
				      >About</NavLink></li>
				    <li><NavLink
				      to="/contact"
				      exact
				      >Contact Us</NavLink></li>
				    <li><NavLink
				      to="/login"
				      exact
				      >Gym Login</NavLink></li>
	              </ul>
	            </nav>
            </div>
		)
	}
}