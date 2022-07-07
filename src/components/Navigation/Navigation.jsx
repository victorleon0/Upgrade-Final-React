import React from 'react';
import './Navigation.scss';
import { Link } from "react-router-dom";
import Searchbar from '../Searchbar/Searchbar.jsx'





const Navigation = () => {

  return (
    <div className="navigatorBar">
      <div className="searchbar">
        <Searchbar/>
      </div>
      <div className="linksContainer">
      <Link to="/">
      
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
        <button className="buttonTravel">¡TRAVEL NOW!</button>
      </Link>
      <Link to="/login">
      <img className="usericon"
        width="50px"
        src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
        alt="User"
      />
      </Link>
    
    </div>

     
    </div>
  )
}

export default Navigation