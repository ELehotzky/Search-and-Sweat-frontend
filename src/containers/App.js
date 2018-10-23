import React, { Component } from 'react';
import {connect} from "react-redux";
import '../App.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import {bindActionCreators} from "redux";
import Home from "../components/Home.js"
import Login from "../components/Login.js"
import About from "../components/About.js"
// import FitnessClasses from "../components/FitnessClasses.js"
import FitnessClassContainer from "./FitnessClassContainer.js"
import Contact from "../components/Contact.js"
import NewClassForm from "../components/NewClassForm.js"
import * as sessionActions from "../actions/sessionActions.js"
// import {logInToken} from "../actions/sessionActions.js"


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

  componentDidMount() {
  const token = localStorage.token;
   if (token !== "undefined"){
      fetch("http://localhost:3000/api/v1/profile", {
          method: "GET", 
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
            .then(resp => resp.json())
            .then(data => {
            if (!data.error) {
              this.props.actions.loginSuccess(data)
            } else{
              console.log(data.error)
            }
          })}
}


  render() {
    // const isLoggedIn = this.props.isLoggedIn
    return (
        <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={!!localStorage.token ? NewClassForm : Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/classes" component={FitnessClassContainer} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/form" component={!!localStorage.token ? NewClassForm : Home} />
          </React.Fragment>
        </Router>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    isLoggedIn: (state.isLoggedIn)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
