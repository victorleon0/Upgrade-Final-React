import React from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import ExperiencesAll from "../../components/Experiences/ExperiencesAll";
import Footer from "../../components/Footer/Footer";

const Trips = () => {
  return (
    <div className="trips">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-container">
        <img
          className="backroundImage"
          src="https://ep01.epimg.net/elviajero/imagenes/2022/02/08/album/1644345991_870499_1644410756_noticia_normal.jpg"
          alt="Backround"
        ></img>
        <ExperiencesAll />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Trips;
