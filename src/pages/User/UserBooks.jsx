import React from "react";
import ProfileCard from "../../components/ExperiencesAdmin/ExperienceCard/ExperienceCard";
import NavigationUser from "../../components/NavigationUser/NavigationUser";
import Footer from "../../components/Footer/Footer";

const UserEdit = () => {
  return (
    <div className="user">
      <div className="navigatorUser">
        <NavigationUser />
      </div>
      <div className="hero-container">
        <div>
        <img className="backroundImage" src="https://cdn.wallpapersafari.com/18/9/QLolf9.jpg" alt="Backround"
      ></img>
        <h1 className="title">Mis Reservas</h1>
        <h4 className="title">Page under construction</h4>
        <img src="https://www.seekpng.com/png/full/10-102101_under-construction-website-is-under-construction-png.png" alt="underconstruction"></img>
        </div>
        <div></div>
      </div>
      <div className="buscadorHome"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default UserEdit;
