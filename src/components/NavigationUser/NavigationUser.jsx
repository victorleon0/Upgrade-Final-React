import { Link } from "react-router-dom";
import "./NavigationUser.scss";

const NavigationUser = () => {

  const postlogout = (ev) => {
    fetch("http://localhost:6022/users/logout", {method: "POST"})
  }

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
          <button onClick={postlogout}>Salir</button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationUser;
