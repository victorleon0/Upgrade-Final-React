import { useEffect, useState } from "react";
import axios from "axios";
import { deleteExperience } from "../../redux/experience/experience.actions";
import { useDispatch } from "react-redux";


import "./ExperiencesAllAdmin.scss";
import { experienceUrl } from "../../helpers/url.helper";

const ExperiencesAll = () => {
  const [experiences, setExperiences] = useState([]);
  const dispatch = useDispatch();

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

  return (
    <>
      <h4 className="titlepage">Reserva ahora tu experiencia y disfruta de un descuento único</h4>
      <div className="experiences__container">
        {experiences &&
          experiences.length > 0 &&
          experiences.map((experience) => {
            return (
              <div className="container">
                <div className="card">
                  <img className="image" src={experience.image} alt={experience.title} />
                  <div className="header">
                    <div className="product-name">
                      {experience.title}
                      <br /> <b> {experience.price}€</b>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="description">
                      {experience.subtitle} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.{" "}
                    </p>

                    <div className="actions">
                      <div className="button bg-green c-white">
                        <a href="/login">Editar</a>
                      </div>
                      <div className="buttonDelete">
                      <button
                    className="button"
                    onClick={() => {
                      dispatch(deleteExperience());
                    }}
                  >
                    Eliminar
                  </button>
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
