import React from "react";
import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="input-container">
      

      <input id="input-search" type="text" placeholder="¿Dónde vamos?" />
      <a href="/food"><button className="buttonGo">¡Vamos!</button></a>
      
    </div>
  );
};

export default Searchbar;
