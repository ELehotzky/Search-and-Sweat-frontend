import React, {Component} from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

export default class Header extends Component {

	render() {
		return(
			<div id="header" style={{"height": "25%"}}>
			<div className="inner">
				<header>
					<h1><a id="logo">Helios</a></h1>
				</header>
			</div>
			</div>
		)
	}
}