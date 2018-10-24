import React, {Component} from "react";

export default class Landing extends Component {

	render() {
		return(
			<div id="page-wrapper">
		        <div id="header">
		            <div className="inner">
		              <header>
		                <h1><a href="index.html" id="logo">Search & Sweat</a></h1>
		                <hr />
		                <p>Find your local fitness classes</p>
		              </header>
		              <footer>
		                <a href="#banner" className="button circled scrolly">Explore</a>
		              </footer>
		            </div>
		        </div>
	        </div>
		)
	}
}