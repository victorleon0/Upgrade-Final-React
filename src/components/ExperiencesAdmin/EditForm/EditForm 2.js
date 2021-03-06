import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editExperience } from "../../../redux/experience/experience.actions";

const EditComponent = (props) => { // <EditComponente experience={experience} />
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(props.experience);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cb = navigate("/admin/manageexperiences");
    dispatch(editExperience(form, cb));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="editExperience">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo</label>
        <input
          id="title"
          type="text"
          placeholder="Título de la ewxperiencia"
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
        <input id="price" type="text" placeholder="price" value={form.price} onChange={handleChange} name="price" />
        <br />
        <br />
        <button>UPDATE</button>
      </form>
    </div>
  );
};

export default EditComponent;
