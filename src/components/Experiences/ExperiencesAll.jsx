import { useEffect, useState } from "react";
import axios from "axios";

import './ExperiencesAll.scss';

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
  }, []);

  return (
    <>
      <h4>Reserva ahora tu experiencia y disfruta de un descuento único</h4>
      <div className="experiences__container">
        {experiences &&
          experiences.length > 0 &&
          experiences.map((experience) => {
            return (
              <div className="experience" key={experience.id}>
                <img
                  className="image"
                  src={experience.imagen}
                  alt={experience.titulo}
                />
                <div className="precio">Price: {experience.precio}€</div>
                <div className="title">
                  Experience: <strong>{experience.titulo}</strong>
                </div>
                <div className="description">
                  Descripción: <strong>{experience.subtitulo}</strong>
                </div>
                <div className="language">
                  Lang: <strong>{experience.idioma}</strong>
                </div>
                <a href="/login">
                  <button>¡Reserva ahora!</button>
                </a>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ExperiencesAll;
