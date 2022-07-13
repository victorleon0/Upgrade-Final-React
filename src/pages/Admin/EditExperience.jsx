import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editExperience } from '../../redux/experience/experience.actions';
import { useNavigate, useParams } from "react-router-dom";
import { experienceUrl } from "../../helpers/url.helper";
import axios from "axios";

const EditExperience = () => {
  
  const { id } = useParams();
  const [formData, setForm] = useState({});

  useEffect(() => {
    const getExperiences = async () => {
      try {
        const res = await axios(`${experienceUrl}/${id}`);

        setForm(res.data)
      } catch (error) {
        console.log("Error en petición", error);
      }
    };
    getExperiences();
  }, []);


  const dispatch = useDispatch()
  const navigate = useNavigate();




  const handleSubmit = (eve) => {
      eve.preventDefault();
      dispatch(editExperience(formData, id))
      navigate('/admin/manageexperiences')
  }

  const handleChange = (eve) => {
      const  {name, value} = eve.target
      setForm({...formData, [name]:value})
  }




  return (
    <>
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
      <button>Editar Experience</button>
    </form>
    </>
  );
};


export default EditExperience;