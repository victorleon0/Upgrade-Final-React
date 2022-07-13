import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editExperience } from '../../redux/experience/experience.actions';
import { useNavigate, useParams } from "react-router-dom";
import { experienceUrl } from "../../helpers/url.helper";
import axios from "axios";

const EditExperience = () => {
  
  const { id } = useParams();

  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const getExperiences = async () => {
      try {
        const res = await axios(experienceUrl);
        setExperiences(res.data);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getExperiences();
  }, []);

  

  async function  experiencefind (serch) {
     return await serch._id === id
  }

  const experienceToUpdate = experiences.find(experiencefind)



  const dispatch = useDispatch()
  const navigate = useNavigate();


  const [formData, setForm] = useState(experienceToUpdate);


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
    <form onSubmit={handleSubmit}>
      <label>
        <span>Titulo</span>
        <input type="text" name="title" placeholder={experienceToUpdate ? experienceToUpdate.title : ''} onChange={handleChange} />
      </label>
      <label>
        <span>Subtitle</span>
        <input type="text" name="subtitle"  placeholder={experienceToUpdate ? experienceToUpdate.subtitle : ''} onChange={handleChange}/>
      </label>
      <label>
        <span>Image</span>
        <input type="text" name="image"  placeholder={experienceToUpdate ? experienceToUpdate.image : ''} onChange={handleChange}/>
      </label>
      <label>
        <span>Precio</span>
        <input type="text" name="price"  placeholder={experienceToUpdate ? experienceToUpdate.price : ''} onChange={handleChange}/>
      </label>
      <button>Editar Experience</button>
    </form>
  );
};

export default EditExperience;