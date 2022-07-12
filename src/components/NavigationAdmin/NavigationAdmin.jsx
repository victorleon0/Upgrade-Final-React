import React from 'react';
import './NavigationAdmin.scss';
import { Link } from "react-router-dom";





const NavigationAdmin = () => {

  return (
    <div className="navigatorBar">

      <div className="linksContainer">

      
      <Link to="/admin/manageexperiences">
        <button>Gestionar Excursiones</button>
      </Link>
      <Link to="/admin/addexperiences">
        <button>Añadir Excursiones</button>
      </Link>
      <Link to="/logout">
        <button>Salir de Admin</button>
      </Link>
      
    
    </div>

     
    </div>
  )
}

export default NavigationAdmin