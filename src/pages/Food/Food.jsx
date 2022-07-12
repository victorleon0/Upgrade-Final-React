import React from 'react';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer';

const Restaurants = () => {

    
  return (
    <div className="trips">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-container">
      <img className="backroundImage" src="https://img.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background_1253-1584.jpg?w=2000" alt="Backround"></img>
      

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Restaurants