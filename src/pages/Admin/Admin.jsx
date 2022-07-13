import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer/Footer";
import NavigationAdmin from "../../components/NavigationAdmin/NavigationAdmin";
import { getAllExperiences } from "../../redux/experience/experience.actions";

const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllExperiences());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="admin">
      <div className="navigatorAdmin">
        <NavigationAdmin />
      </div>
      <div className="hero-container">
      <img className="backroundImage" src="https://cdn.wallpapersafari.com/18/9/QLolf9.jpg" alt="Backround"
      ></img>
        <h1 className="title">¡Bienvenido!</h1>
        <h4 className="title">Utiliza la barra de navegación para gestionar excursiones y usuarios</h4>
      </div>
      <div className="buscadorHome"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Admin;
