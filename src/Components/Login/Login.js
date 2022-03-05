import { Link } from "react-router-dom";
import React from "react";
import "./login.css";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="Login_singhinButton">Sing In</button>
        </form>
        <p>
          By continuing, you agree to Amazon Clone Conditions of Use and Privacy
          Notice.
        </p>

        <button className="login_registerButton">
          Create Your Amazon Clone account
        </button>
      </div>
    </div>
  );
}

export default Login;
