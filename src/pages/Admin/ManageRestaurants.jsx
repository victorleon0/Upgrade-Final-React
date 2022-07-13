import React from "react";
import Footer from "../../components/Footer/Footer";
import NavigationAdmin from "../../components/NavigationAdmin/NavigationAdmin";
import RestaurantsAllAdmin from "../../components/ExperiencesAdmin/RestaurantsAllAdmin";



const ManageRestaurants = () => {
  return (
    <div className="admin">
      <div className="navigatorAdmin">
        <NavigationAdmin />
      </div>
      <div className="users-container">
      <img className="backroundImage" src="https://cdn.wallpapersafari.com/18/9/QLolf9.jpg" alt="Backround"
      ></img>
      <RestaurantsAllAdmin/>
      </div>
      <div className="buscadorHome"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ManageRestaurants;
