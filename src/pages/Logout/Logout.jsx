import React from "react";
import Footer from "../../components/Footer/Footer";
import NavigationAdmin from "../../components/NavigationAdmin/NavigationAdmin";
import HomeButton from "../../components/HomeButton/HomeButton";

const Admin = () => {
  return (
    <div className="admin">
      <div className="navigatorAdmin">
      </div>
      <div className="hero-container">
        <h1 className="title">¡Gracias por confiar en nosotros!</h1>
        <h4 className="title">Vuelve Pronto</h4>
        <HomeButton />
        <img className="backroundImage" src="https://i.pinimg.com/originals/9e/c2/d5/9ec2d5ce4f42ccc310f13f1c0f53d295.jpg" alt="Backround"
      ></img>
        <h5 className="title">Volver a la página principal</h5>
      </div>
      <div className="buscadorHome"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Admin;
