import React from 'react';
import './Navigation.scss';
import { Link } from "react-router-dom";





const Navigation = () => {

  return (
    <div className="navigatorBar">
    
      <Link to="/">
        <img  width= "50px" src="https://cdn-icons-png.flaticon.com/512/3127/3127176.png" alt="Home" />
      </Link>
      <Link to="/food">
        <button>¿Donde comer?</button>
      </Link>
      <Link to="/trips">
        <button>¿Que hacer?</button>
      </Link>
      <Link to="/events">
        <button>Eventos en ...</button>
      </Link>
      <Link to="/weather">
        <button>El tiempo en ...</button>
      </Link>
      <Link to="/travel">
        <button>¡TRAVEL NOW!</button>
      </Link>

     
    </div>
  )
}

export default Navigation