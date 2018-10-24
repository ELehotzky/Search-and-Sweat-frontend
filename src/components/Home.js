import React from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import { Button, Card, Row, Col } from 'materialize-css';

class Home extends React.Component {

	render() {
	return (
					<div id="page-wrapper">
		        <div id="header">
		            <div className="inner">
		              <header>
		                <h1><a id="logo">Search & Sweat</a></h1>
		                <hr />
		                <p>Find your local fitness classes</p>
		              </header>
		              <NavLink to="/classes">
		              <footer>
		                <a className="button circled scrolly">Explore</a>
		              </footer>
		              </NavLink>
		            </div>
		        </div>
	        </div>
	        )
	}
}

export default Home;