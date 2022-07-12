import { Link } from "react-router-dom";
import "./HomeButton.scss";

const HomeButton = () => {
  return (
    <div className="input-container">
      <Link to="/">
        <img width="50px" src="https://cdn-icons-png.flaticon.com/512/3127/3127176.png" alt="Home" />
      </Link>
    </div>
  );
};

export default HomeButton;
