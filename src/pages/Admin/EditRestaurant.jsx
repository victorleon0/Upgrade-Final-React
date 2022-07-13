import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editRestaurant } from '../../redux/restaurant/restaurant.actions';
import { useNavigate, useParams } from "react-router-dom";
import { restaurantUrl } from "../../helpers/url.helper";
import axios from "axios";

const EditRestaurant = () => {
  
  const { id } = useParams();
  const [formData, setForm] = useState({});

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const res = await axios(`${restaurantUrl}/${id}`);

        setForm(res.data)
      } catch (error) {
        console.log("Error en petición", error);
      }
    };
    getRestaurants();
  }, []);


  const dispatch = useDispatch()
  const navigate = useNavigate();




  const handleSubmit = (eve) => {
      eve.preventDefault();
      dispatch(editRestaurant(formData, id))
      navigate('/admin/managerestaurants')
  }

  const handleChange = (eve) => {
      const  {name, value} = eve.target
      setForm({...formData, [name]:value})
  }




  return (

    <form onSubmit={handleSubmit}>
      <label>
        <span>Titulo</span>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        <span>Subtitle</span>
        <input type="text" name="subtitle"  value={formData.subtitle} onChange={handleChange}/>
      </label>
      <label>
        <span>Image</span>
        <input type="text" name="image"  value={formData.image} onChange={handleChange}/>
      </label>
      <label>
        <span>Precio</span>
        <input type="text" name="price"  value={formData.price} onChange={handleChange}/>
      </label>
      <button>Editar Restaurant</button>
    </form>

  );
};


export default EditRestaurant;