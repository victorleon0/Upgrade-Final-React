import React from "react";
import Footer from "../../components/Footer/Footer";
import NavigationAdmin from "../../components/NavigationAdmin/NavigationAdmin";
import ExperienceForm from "../../components/ExperiencesAdmin/ExperienceForm/ExperienceForm";

const AddExperience = () => {
  return (
    <div className="admin">
      <div className="navigatorAdmin">
        <NavigationAdmin />
      </div>
      <img className="backroundImage" src="https://cdn.wallpapersafari.com/18/9/QLolf9.jpg" alt="Backround"
      ></img>
      <div className="users-container">
        <ExperienceForm />
      </div>
      <div className="buscadorHome"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default AddExperience;
