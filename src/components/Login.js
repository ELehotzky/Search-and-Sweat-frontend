import React from "react";


const Login = () => {
  return (
    <div>
      <form>
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
    )
}

export default Login;