import React from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import WeatherComponent from "../../components/WeatherComponent/WeatherComponent.js";
import Footer from "../../components/Footer/Footer.jsx";



const Weather = () => {
 

  return (
    <div className="contact">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-container">
      <img className="backroundImage" src="https://www.grecia.info/es/wp-content/uploads/sites/49/el-tiempo.jpg" alt="Backround"></img>
      <WeatherComponent/>

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Weather;
