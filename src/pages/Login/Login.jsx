import React from "react";
import { useState } from "react";
import "./Login.scss";
import Navigation from "../../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" });

  const submitLogin = (ev) => {
    ev.preventDefault();
    fetch('http://localhost:6022/users/login', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(form), // data can be string or {object}!
      headers:{
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(res => {console.log('Success:', res); alert('Login Correcto'); navigate('/user') })

    .catch(error => console.error('Error:', error))
  };

  const handleInput = (ev) =>
    setForm({ ...form, [ev.target.name]: ev.target.value });

  return (
    <div className="login">
      <div className="navigator">
        {/* <Navigation /> */}
      </div>
      <div className="formContainer">
        <h4>Login</h4>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            name="username"
            className="username form-control"
            placeholder="Username"
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            className="password form-control"
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
          <p>¿No tienes cuenta? Regístrate</p>
        </form>
      </div>
    </div>
  );
};

export default Login;