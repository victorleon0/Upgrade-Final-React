import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
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
          <ProfileCard />
        </div>
        <div>
        </div>
      </div>
      <div className="buscadorHome"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default UserEdit;
