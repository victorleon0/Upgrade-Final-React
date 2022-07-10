import React from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import WeatherComponent from "../../components/WeatherComponent/WeatherComponent.js";
import Footer from "../../components/Footer/Footer.jsx";


import "./Weather.scss";

const Weather = () => {
 

  return (
    <div className="container">
      <div className="navigator">
        <Navigation />
      </div>
      <div className="Weather">
        <WeatherComponent/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
      
    </div>
  );
};

export default Weather;
