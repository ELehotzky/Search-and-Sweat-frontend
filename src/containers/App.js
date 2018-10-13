import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Home from "../components/Home.js"
import Login from "../components/Login.js"
import About from "../components/About.js"
import Classes from "../components/Classes.js"
import ContactUs from "../components/ContactUs.js"

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
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
        background: "darkblue"
      }}
      >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: "darkblue"
      }}
      >About</NavLink>
    <NavLink
      to="/contact"
      exact
      style={link}
      activeStyle={{
        background: "darkblue"
      }}
      >Contact Us</NavLink>

  </div>
)



class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </React.Fragment>
        </Router>
    );
  }
}


export default App;
