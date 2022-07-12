import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer/Footer";
import NavigationUser from "../../components/NavigationUser/NavigationUser";
import { getAllExperiences } from "../../redux/experience/experience.actions";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllExperiences());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="user">
      <div className="navigatorUser">
        <NavigationUser />
      </div>
      <div className="hero-container">
        <h1 className="title">¡Bienvenido!</h1>
        <h4 className="title">Utiliza la barra de navegación para gestionar tu perfil y tus compras</h4>
      </div>
      <div className="buscadorHome"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default User;
