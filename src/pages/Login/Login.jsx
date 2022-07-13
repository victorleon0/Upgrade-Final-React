import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { loginFormSubmit } from "../../redux/auth/auth.actions"

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const submitLogin = (ev) => {
    ev.preventDefault();
    fetch("http://localhost:6022/users/login", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(form), // data can be string or {object}!
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((res) => res.json())

      .catch((error) => console.error("Error:", error))
      .then((resesponse) => {
        console.log(resesponse.role);
        dispatch(loginFormSubmit(resesponse))
        if (resesponse.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      });
  };

  const handleInput = (ev) => setForm({ ...form, [ev.target.name]: ev.target.value });

  return (
    <div className="login">
      <div className="navigator">
      </div>
      <img className="backroundImage" src="https://i.pinimg.com/originals/9e/c2/d5/9ec2d5ce4f42ccc310f13f1c0f53d295.jpg" alt="Backround"
      ></img>
      <div className="formContainer">
        <h4>Login</h4>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            name="email"
            className="username form-control"
            placeholder="Email"
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            className="password form-control"
            placeholder="Password"
            onChange={handleInput}
          />
          <button className="submit" type="submit" value="Login" onClick={submitLogin}>
            Login
          </button>
          <a href="/users/register">¿No tienes cuenta? Regístrate</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
