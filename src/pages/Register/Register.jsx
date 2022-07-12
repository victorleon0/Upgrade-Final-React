import React from "react";
import { useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Register.scss";

const Register = (/* prop */) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const submitRegister = (ev) => {
    ev.preventDefault();
    /* prop.registerUser(form); */
    console.log(form);
    fetch("http://localhost:6022/users/register", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(form), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  const handleInput = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // const handleInput = (ev) =>
  //   setForm({ ...form, [ev.target.name]: ev.target.value });

  return (
    <div className="register">
      <div className="navigator">
        <Searchbar />
      </div>
      <img
        className="backroundImage"
        src="https://i.pinimg.com/originals/9e/c2/d5/9ec2d5ce4f42ccc310f13f1c0f53d295.jpg"
        alt="Backround"
      ></img>
      <div className="formContainer">
        <h4>Regístrate</h4>
        <form onSubmit={submitRegister}>
          <input type="email" name="email" placeholder="Email" onChange={handleInput} />
          <input
            type="password"
            name="password"
            className="password form-control"
            placeholder="Password"
            onChange={handleInput}
          />
          <button className="submit" type="submit" value="Login" onClick={submitRegister}>
            Login
          </button>
          <a href="/login">¿Ya tienes cuenta? Inicia Sesión</a>
        </form>
      </div>
    </div>
  );
};

export default Register;
