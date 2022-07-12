import { useEffect, useState } from "react";
import axios from "axios";

const ExperiencesAll = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const getExperiences = async () => {
      try {
        const res = await axios("http://localhost:6022/experiences");
        console.log(res);
        // const {info, results} = await res.json(); //  Fetch
        setExperiences(res.data);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getExperiences();
  }, []) ; 
 
  return (
    <>
      <h1>Excursiones</h1>
      <div className="experiences__container">
        {experiences && experiences.length > 0 && experiences.map((experience) => {
          return (
            <div className="experience" key={experience.id}>
              <img className="experience__image" src={experience.imagen} alt={experience.titulo} />
              <div>
              Price: {experience.precio}€
              </div>
              <div>
                Experience: <strong>{experience.titulo}</strong>
              </div>
              <div>
                Descripción: <strong>{experience.subtitulo}</strong>
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  );
};

export default ExperiencesAll;
