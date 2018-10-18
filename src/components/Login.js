import React, { Component } from 'react';

export class Login extends Component {

  state = {
    email: "",
    password: "",
    currentAdmin: {
      email: ""
    }
  }

componentDidMount() {
  const token = localStorage.token;
  fetch("http://localhost:3000/form", {
    method: "GET", 
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
      .then(resp => resp.json())
      .then(data => {
      if (!data.error) {
        this.setState({
          currentAdmin: data
        })
      }
    })
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  });
}

  logIn = (event) => {
    event.preventDefault();

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
        <form onSubmit={this.logIn}>
          <div>
            <input type="text" name="email" placeholder="Email Address" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;