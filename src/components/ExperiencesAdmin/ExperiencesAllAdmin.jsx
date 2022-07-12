import { useEffect, useState } from "react";
import axios from "axios";
import { deleteExperience, editExperience } from "../../redux/experience/experience.actions";
import { useDispatch } from "react-redux";


import "./ExperiencesAllAdmin.scss";
import { experienceUrl } from "../../helpers/url.helper";
import { useNavigate } from "react-router-dom";

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
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <h4 className="titlepage">Reserva ahora tu experiencia y disfruta de un descuento único</h4>
      <div className="experiences__container">
        {experiences &&
          experiences.length > 0 &&
          experiences.map((experience, id) => {
            return (
              <div className="container" key={id}>
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
                      <button
                    className="button"
                    onClick={() => {
                      dispatch(editExperience());
                    }}
                  >
                    Editar
                  </button>
                  </div>
                      <div className="buttonDelete">
                      <button
                    className="button"
                    onClick={() => {
                      dispatch(deleteExperience(experience))
                      refreshPage()
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
