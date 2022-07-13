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
