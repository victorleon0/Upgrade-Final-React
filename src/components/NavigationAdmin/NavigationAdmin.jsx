import { Link } from "react-router-dom";
import "./NavigationAdmin.scss";



const NavigationAdmin = () => {

  const postlogout = (ev) => {
    fetch("http://localhost:6022/users/logout", {method: "POST"})
  }

  return (
    <div className="navigatorBar">
      <div className="linksContainer">
      <Link to="/admin/managerestaurants">
          <button>Gestionar Restaurantes</button>
        </Link>
        <Link to="/admin/addrestaurant">
          <button>Añadir Restaurantes</button>
        </Link>
        <Link to="/admin/manageexperiences">
          <button>Gestionar Excursiones</button>
        </Link>
        <Link to="/admin/addexperiences">
          <button>Añadir Excursiones</button>
        </Link>
        <Link to="/logout">
          <button onClick={postlogout}>Salir de Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationAdmin;
