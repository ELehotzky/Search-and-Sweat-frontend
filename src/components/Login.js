import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as sessionActions from "../actions/sessionActions.js"

export class Login extends Component {

  state = {
    credentials: {
      email: "",
      password: "",
    }
  }

componentDidMount() {
  const token = localStorage.token;
  fetch("http://localhost:3000/login", {
    method: "GET", 
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
      .then(resp => resp.json())
      .then(data => {
      if (!data.error) {
        this.setState({
          credentials: data
        })
      }
    })
}

handleChange = (event) => {
  let field = event.target.name;
  let credentials = this.state.credentials
  credentials[field] = event.target.value;
  return this.setState({
    credentials: credentials
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  this.props.actions.logInAdmin(this.state.credentials);

    fetch("http://localhost:3000/api/v1/admins", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(resp => resp.text())
    .then(data => {
      if (!data.error) {
        localStorage.token = data.token;
        this.setState({
          currentAdmin: data.admin
        })
      } else {
        this.setState({
          loginError: data.error
        })
      }
    })
  }


  render() {
    return (
      <div>
        <form onClick={this.handleSubmit}>
          <div>
            <input type="text" name="email" onChange={this.handleChange} value={this.state.credentials.email} placeholder="Email Address" />
          </div>
          <div>
            <input type="password" name="password" onChange={this.handleChange} value={this.state.credentials.password} placeholder="Password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Login);








