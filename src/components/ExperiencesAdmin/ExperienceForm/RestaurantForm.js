import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRestaurant } from "../../../redux/restaurant/restaurant.actions";


const INITIAL_STATE = {
  title: "",
  image: "",
  subtitle: "",
  price: "",
};

const RestaurantForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(INITIAL_STATE);

  const handleSubmit = (eve) => {
    eve.preventDefault();
    dispatch(createRestaurant(form));
    setForm(INITIAL_STATE);
  };

  const handleChange = (eve) => {
    const { name, value } = eve.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex-container">
      <div className="container">
        <h1>Añadir Excursión</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titulo</label>
          <input
            id="title"
            type="text"
            placeholder="Título de la experiencia"
            value={form.title}
            onChange={handleChange}
            name="title"
          />
          <br />
          <br />
          <label htmlFor="image">Picture</label>
          <input
            id="image"
            type="text"
            placeholder="Introduce la URL de la image"
            value={form.image}
            onChange={handleChange}
            name="image"
          />
          <br />
          <br />
          <label htmlFor="subtitle">Subtitulo</label>
          <input
            id="subtitle"
            type="text"
            placeholder="subtitle"
            value={form.subtitle}
            onChange={handleChange}
            name="subtitle"
          />
          <br />
          <br />
          <label htmlFor="price">Precio</label>
          <input
            id="price"
            type="text"
            placeholder="price"
            value={form.price}
            onChange={handleChange}
            name="price"
          />

          <br />
          <br />
          <button type="submit">ADD</button>
        </form>
      </div>
      
    </div>
  );
};

export default RestaurantForm;