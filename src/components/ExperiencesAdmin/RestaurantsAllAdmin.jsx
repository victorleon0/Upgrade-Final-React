import { useEffect, useState } from "react";
import axios from "axios";
import { deleteRestaurant } from "../../redux/restaurant/restaurant.actions";
import { useDispatch } from "react-redux";


import { restaurantUrl } from "../../helpers/url.helper";

import { Link } from "react-router-dom"

const RestaurantsAll = () => {
  const [restaurants, setRestaurants] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const res = await axios(restaurantUrl);
        setRestaurants(res.data);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getRestaurants();
  }, []);
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <h4 className="titlepage">
        Reserva ahora tu experiencia y disfruta de un descuento único
      </h4>
      <div className="restaurants__container">
        {restaurants &&
          restaurants.length > 0 &&
          restaurants.map((restaurant, id) => {
            return (
              <div className="container" key={id}>
                <div className="card">
                  <img
                    className="image"
                    src={restaurant.image}
                    alt={restaurant.title}
                  />
                  <div className="header">
                    <div className="product-name">
                      {restaurant.title}
                      <br /> <b> {restaurant.price}€</b>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="description">
                      {restaurant.subtitle} Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.{" "}
                    </p>

                    <div className="actions">
                      <div className="button bg-green c-white">
                      <Link to={`/restaurant/${restaurant._id}`}><button>Modificar</button></Link>
                    
                      </div>
                      <div className="buttonDelete">
                        <button
                          className="button"
                          onClick={() => {
                            dispatch(deleteRestaurant(restaurant));
                            refreshPage();
                          }}
                        >
                          Eliminar
                        </button>
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
