import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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

  const {register, handleSubmit } = useForm({defaultValues:{
  }});


  const onSubmit = (formData) => {
    dispatch(editExperience(formData, id));
    navigate('/admin/manageexperiences')
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Titulo</span>
        <input type="text" name="title" value={experienceToUpdate ? experienceToUpdate.title : ''} {...register("title")} />
      </label>
      <label>
        <span>Subtitle</span>
        <input type="text" name="subtitle"  value={experienceToUpdate ? experienceToUpdate.subtitle : ''}{...register("subtitle")}/>
      </label>
      <label>
        <span>Image</span>
        <input type="text" name="image"  value={experienceToUpdate ? experienceToUpdate.image : ''}{...register("image")}/>
      </label>
      <label>
        <span>Precio</span>
        <input type="text" name="price"  value={experienceToUpdate ? experienceToUpdate.price : ''}{...register("price")}/>
      </label>
      <button>Editar Experience</button>
    </form>
  );
};

export default EditExperience;