import React from "react";
import { useState } from "react";
import "./Register.scss";
import Navigation from "../../components/Navigation/Navigation";

const Register = (prop) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const submitRegister = (ev) => {
    ev.preventDefault();
    prop.registerUser(form);
  };


  const handleInput = (event) => {
    const {name, value} = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // const handleInput = (ev) =>
  //   setForm({ ...form, [ev.target.name]: ev.target.value });
    

  return (
    <div class="login">
      <div className="navigator">
        <Navigation />
      </div>
      <div className="formContainer">
        <h4>Regístrate</h4>
        <form onSubmit={submitRegister} method="get">
          <input
            type="email"
            name="email"
            placeholder="Email"
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
            onClick={submitRegister}
          >
            Login
          </button>
          <a href="/login">¿Ya tienes cuenta? Inicia Sesión</a>
        </form>
      </div>
    </div>
  );
};

export default Register;
