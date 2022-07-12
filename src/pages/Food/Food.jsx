import React from 'react';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer';
import RestaurantsAll from '../../components/Restaurants/RestaurantsAll.jsx';

const Restaurants = () => {

    
  return (
    <div className="food">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-container">
      <img className="backroundImage" src="https://img.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background_1253-1584.jpg?w=2000" alt="Backround"></img>
      <RestaurantsAll />

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>

  )
}

export default Restaurants