import React from "react";
import "./NavigationUser.scss";
import { Link } from "react-router-dom";

const NavigationUser = () => {
  return (
    <div className="navigatorBar">
      <div className="linksContainer">
        <Link to="/users/books">
          <button>Mis Reservas</button>
        </Link>
        <Link to="/user/edit">
          <button>Editar Perfil</button>
        </Link>
        <Link to="/logout">
          <button>Salir</button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationUser;
