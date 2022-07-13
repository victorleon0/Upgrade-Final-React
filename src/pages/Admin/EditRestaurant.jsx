import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editRestaurant } from '../../redux/restaurant/restaurant.actions';
import { useNavigate, useParams } from "react-router-dom";
import { restaurantUrl } from "../../helpers/url.helper";
import axios from "axios";

const EditRestaurant = () => {
  
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState([]);
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

  async function  restaurantfind (serch) {
     return await serch._id === id
  }

  const restaurantToUpdate = restaurants.find(restaurantfind)


  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {register, handleSubmit } = useForm({defaultValues:{
  }});


  const onSubmit = (formData) => {
    dispatch(editRestaurant(formData, id));
    navigate('/admin/managerestaurants')
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Titulo</span>
        <input type="text" name="title" value={restaurantToUpdate ? restaurantToUpdate.title : ''} {...register("title")} />
      </label>
      <label>
        <span>Subtitle</span>
        <input type="text" name="subtitle"  value={restaurantToUpdate ? restaurantToUpdate.subtitle : ''}{...register("subtitle")}/>
      </label>
      <label>
        <span>Image</span>
        <input type="text" name="image"  value={restaurantToUpdate ? restaurantToUpdate.image : ''}{...register("image")}/>
      </label>
      <label>
        <span>Precio</span>
        <input type="text" name="price"  value={restaurantToUpdate ? restaurantToUpdate.price : ''}{...register("price")}/>
      </label>
      <button>Editar Restaurant</button>
    </form>
  );
};

export default EditRestaurant;