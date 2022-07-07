import React from "react";
import { useState } from "react";
import './Register.scss';
import Navigation from "../../components/Navigation/Navigation";

const Register = (prop) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const submitRegister = (ev) => {
    ev.preventDefault();
    prop.registerUser(form);
  };

  const handleInput = (ev) =>
    setForm({ ...form, [ev.target.name]: ev.target.value });

  return (
    <div class="login">
    <div className="navigator">
    <Navigation />
    </div>
    <div className="formContainer">
      
            
              <h4>Regístrate</h4>
              <form onSubmit={submitRegister}>
              <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Apellidos"
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Teléfono"
                  onChange={handleInput}
                />
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
                <button className="submit" type="submit" value="Login" onClick={submitRegister}>Login</button>
                <p>¿Ya tienes cuenta? Inicia Sesión</p>
              </form>
            </div>
          
    </div>
  );
};

export default Register;
