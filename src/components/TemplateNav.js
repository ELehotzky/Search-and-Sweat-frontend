import React, {Component} from "react";

export default class TemplateNav extends Component {

	render() {
		return(
			<div id="page-wrapper">
	            <nav id="nav">
	              <ul>
	                <li><a href="index.html">Home</a></li>
	                <li><a href="left-sidebar.html">About</a></li>
	                <li><a href="left-sidebar.html">Contact Us</a></li>
	                <li><a href="right-sidebar.html">Gym Login</a></li>
	              </ul>
	            </nav>
            </div>
		)
	}
}