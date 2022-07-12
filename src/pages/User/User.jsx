import React from "react";
import Footer from "../../components/Footer/Footer";
import NavigationUser from "../../components/NavigationUser/NavigationUser";

const User = () => {
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
