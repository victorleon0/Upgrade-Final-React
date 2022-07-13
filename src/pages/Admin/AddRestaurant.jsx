import React from "react";
import Footer from "../../components/Footer/Footer";
import NavigationAdmin from "../../components/NavigationAdmin/NavigationAdmin";
import RestaurantForm from "../../components/ExperiencesAdmin/ExperienceForm/RestaurantForm";

const AddRestaurant = () => {
  return (
    <div className="admin">
      <div className="navigatorAdmin">
        <NavigationAdmin />
      </div>
      <div className="users-container">
        <RestaurantForm />
      </div>
      <div className="buscadorHome"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default AddRestaurant;