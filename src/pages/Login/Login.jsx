import React from "react";
import { useState } from "react";
import "./Login.scss";
import Navigation from "../../components/Navigation/Navigation";

const Login = (prop) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const submitLogin = (ev) => {
    ev.preventDefault();
    prop.loginUser(form);
  };

  const handleInput = (ev) =>
    setForm({ ...form, [ev.target.name]: ev.target.value });

  return (
    <div class="login">
      <div className="navigator">
        <Navigation />
      </div>
      <div className="formContainer">
        <h4>Login</h4>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            name="username"
            class="username form-control"
            placeholder="Username"
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            class="password form-control"
            placeholder="Password"
            onChange={handleInput}
          />
          <button
            className="submit"
            type="submit"
            value="Login"
            onClick={submitLogin}
          >
            Login
          </button>
          <a href="/users/register">¿No tienes cuenta? Regístrate</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
