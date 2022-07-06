import React from "react";
import "./Searchbar.scss";
import { Link } from "react-router-dom";


const Searchbar = (e) => {
  return (
    <div className="input-container">
    <Link to="/">
      <img
        width="50px"
        src="https://cdn-icons-png.flaticon.com/512/3127/3127176.png"
        alt="Home"
      />
      </Link>
      <input id="input-search" type="text" placeholder="¿Dónde vamos?" />
      <button className="geolocationButton">
        <img
          width="20px"
          height="20px"
          src="https://cdn-icons-png.flaticon.com/512/96/96615.png"
          alt="geolocation img"
        ></img>
      </button>
    </div>
  );
};

export default Searchbar;
