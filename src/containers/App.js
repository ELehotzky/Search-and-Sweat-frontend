import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Home from "../components/Home.js"
import Login from "../components/Login.js"
import About from "../components/About.js"
import FitnessClasses from "../components/FitnessClasses.js"
import FitnessClassContainer from "./FitnessClassContainer.js"
import Contact from "../components/Contact.js"
import NewClassForm from "../components/NewClassForm.js"


const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lightgreen",
  textDecoration: "none",
  color: "white"
}

const Navbar = () => (
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: "green"
      }}
      >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: "green"
      }}
      >About</NavLink>
    <NavLink
      to="/contact"
      exact
      style={link}
      activeStyle={{
        background: "green"
      }}
      >Contact Us</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: "green"
      }}
      >Gym Login</NavLink>
  </div>
)

class App extends Component {
  render() {
    let token = localStorage.token
    return (
        <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={localStorage.token ? NewClassForm :Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/classes" component={FitnessClassContainer} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/form" component={NewClassForm} />
          </React.Fragment>
        </Router>
    );
  }
}


export default App;
