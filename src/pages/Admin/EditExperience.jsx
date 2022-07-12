import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editExperience } from '../../redux/experience/experience.actions';
import { useNavigate, useParams } from "react-router-dom";

const EditExperience = () => {
  
  const { id } = useParams();

//   const {experience} = useSelector(state => state.experience);
//   const experienceToUpdate = experience[id];
// console.log(experience);

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
        <input type="text" name="title" {...register("title")} />
      </label>
      <label>
        <span>Subtitle</span>
        <input type="text" name="subtitle"  {...register("subtitle")}/>
      </label>
      <label>
        <span>Image</span>
        <input type="text" name="image"  {...register("image")}/>
      </label>
      <label>
        <span>Precio</span>
        <input type="text" name="price"  {...register("price")}/>
      </label>
      <button>Editar Experience</button>
    </form>
  );
};

export default EditExperience;