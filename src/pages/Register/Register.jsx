import React from "react";
import { useState } from "react";
import "./Register.scss";
import Navigation from '../../components/Navigation/Navigation'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" });

  const submitRegister = (ev) => {
    ev.preventDefault();
    fetch('http://localhost:6022/users/register', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(form), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(res => res.json(), alert('Cuenta Registrada'), navigate('/login'))
    .catch(error => console.error('Error:', error))
   // .then(response => alert('Cuenta Registrada'), navigate('/login'))//console.log('Success:', response));

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
    <div className="login">
      <div className="navigator">
        {/* <Navigation /> */}
      </div>
      <div className="formContainer">
        <h4>Regístrate</h4>
        <form onSubmit={submitRegister}>
          <input
            type="email"
            name="email"
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



// arreglar la barra de navegación