import React from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import ExperiencesAll from "../../components/Experiences/ExperiencesAll";
import ExperiencesList from "../../components/Experiences/ExperiencesList"
import Footer from "../../components/Footer/Footer"



const Trips = () => {
 

  return (
    <div className="trips">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-container">
      <ExperiencesAll/>
      <ExperiencesList/>

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Trips;
