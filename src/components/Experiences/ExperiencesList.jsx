import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ExperiencesList = () => {
    const [experiences, setExperiences] = useState([]);

     const getExperiences = async() =>{
        const res = await axios("https://localhost:6022/experiences/$62c7ca13bbb43676ebc64ac7");
        setExperiences(res.data)
     }

     useEffect(() => {
         getExperiences();
     },[])

  return (
    <div>
        {experiences.length > 0 && experiences.map((experience) => {
            return (
                <Link to={`/experience/${experience.titulo}`}>
                <img src={experience.imagen} alt={experience.titulo} /></Link>
            )
        })}
    </div>
  )
}

export default ExperiencesList