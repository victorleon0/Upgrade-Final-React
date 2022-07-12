import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar.jsx";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigatorBar">
      <div className="searchbar">
        <Searchbar />
      </div>
      <div className="linksContainer">
        

        <Link to="/food">
          <button>¿Donde comer?</button>
        </Link>
        <Link to="/trips">
          <button>¿Que hacer?</button>
        </Link>

        <Link to="/weather">
          <button>El tiempo en ...</button>
        </Link>
        <Link to="/contact">
          <button className="buttonContact">Contacta con nosotros</button>
        </Link>
        <Link to="/login">
          <button>Inicia Sesión</button>
        </Link>
        <Link to="/users/register">
          <button>Registro</button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
