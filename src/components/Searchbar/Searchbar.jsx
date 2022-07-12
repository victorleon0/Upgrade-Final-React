import React from "react";
import { Link } from "react-router-dom";
import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="input-container">
      <Link to="/">
        <img width="50px" src="https://cdn-icons-png.flaticon.com/512/3127/3127176.png" alt="Home" />
      </Link>

      <input id="input-search" type="text" placeholder="¿Dónde vamos?" />
    </div>
  );
};

export default Searchbar;
