import React from 'react';
import './NavigationAdmin.scss';
import { Link } from "react-router-dom";





const NavigationAdmin = () => {

  return (
    <div className="navigatorBar">

      <div className="linksContainer">

      <Link to="/admin/manage">
        <button>Gestionar Excursiones</button>
      </Link>
      <Link to="/admin/users">
        <button>Ver usuarios</button>
      </Link>
      <Link to="/">
        <button>Salir de Admin</button>
      </Link>
      
    
    </div>

     
    </div>
  )
}

export default NavigationAdmin