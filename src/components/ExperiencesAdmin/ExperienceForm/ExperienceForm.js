import { useState } from "react";
import { useDispatch } from "react-redux";
import { createExperience } from "../../../redux/experience/experience.actions";
import "./ExperienceForm.scss";

const INITIAL_STATE = {
  title: "",
  image: "",
  subtitle: "",
  price: "",
};

const ExperienceForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createExperience(form));
    setForm(INITIAL_STATE);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
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

export default ExperienceForm;