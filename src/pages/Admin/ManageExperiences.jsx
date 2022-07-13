import React from "react";
import Footer from "../../components/Footer/Footer";
import NavigationAdmin from "../../components/NavigationAdmin/NavigationAdmin";
import ExperiencesAllAdmin from "../../components/ExperiencesAdmin/ExperiencesAllAdmin";



const ManageExperiences = () => {
  return (
    <div className="admin">
      <div className="navigatorAdmin">
        <NavigationAdmin />
      </div>
      <div className="users-container">
      <img className="backroundImage" src="https://cdn.wallpapersafari.com/18/9/QLolf9.jpg" alt="Backround"
      ></img>
      <ExperiencesAllAdmin/>
      </div>
      <div className="buscadorHome"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ManageExperiences;
