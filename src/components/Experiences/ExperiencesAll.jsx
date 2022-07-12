import { useEffect, useState } from "react";
import axios from "axios";

import "./ExperiencesAll.scss";

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
      <h4 className="titlepage">Reserva ahora tu experiencia y disfruta de un descuento único</h4>
      <div className="experiences__container">
      
        {experiences &&
          experiences.length > 0 &&
          experiences.map((experience) => {
            return (
              
                <div class="container">
                  <div class="card">
                    <img
                      class="image"
                      src={experience.image}
                    alt={experience.title}/>
                    <div class="header">
                      <div class="product-name">
                        {experience.title}
                        <br/> <b> {experience.price}€</b>
                        
                      </div>

                      
                    </div>
                    <div class="card-body">
                      <p class="description">{experience.subtitle} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                      <div class="actions">
                        <div class="button bg-green c-white">
                          <a href="/login">¡Reserva Ahora!</a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            );
          })}
      </div>
    </>
  );
};

export default ExperiencesAll;
