import { useEffect, useState } from "react";
import axios from "axios";

import "./RestaurantsAll.scss";

const RestaurantsAll = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const res = await axios("http://localhost:6022/restaurants");
        console.log(res);
        // const {info, results} = await res.json(); //  Fetch
        setRestaurants(res.data);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getRestaurants();
  }, []);

  return (
    <>
      <h4 className="titlepage">¿Tienes hambre? Elige entre los mejores restaurantes</h4>
      <div className="experiences__container">
      
        {restaurants &&
          restaurants.length > 0 &&
          restaurants.map((restaurant) => {
            return (
              
                <div class="container">
                  <div class="card">
                    <img
                      class="image"
                      src={restaurant.image}
                    alt={restaurant.title}/>
                    <div class="header">
                      <div class="product-name">
                        {restaurant.title}
                        <br/> <b> {restaurant.price}€</b>
                        
                      </div>

                      
                    </div>
                    <div class="card-body">
                      <p class="description">{restaurant.subtitle} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                      <div class="actions">
                        <div class="button bg-green c-white">
                          <a href="/login">¡Reserva Ahora!</a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            );
          })}
      </div>
    </>
  );
};

export default RestaurantsAll;
