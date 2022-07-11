import { useEffect, useState } from "react";
import axios from "axios";

const ExperiencesAll = () => {
  const [experiences, setExperiences] = useState([]);
  const [info, setInfo] = useState({});
  useEffect(() => {
    const getExperiences = async () => {
      try {
        const res = await axios("https://localhost:6022/experiences");
        console.log(res);
        // const {info, results} = await res.json(); //  Fetch
        const { info, results } = res.data;
        setExperiences(results);
        setInfo(info);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getExperiences();
  }); // [] quiere decir que solo se ejecuta una vez
  const getMoreExperiences = async (url) => {
    try {
      const res = await axios(url);
      const { info, results } = res.data;
      window.scrollTo(0, 0);
      setExperiences(results);
      setInfo(info);
    } catch (error) {
      console.log(("Error en petición", error));
    }
    // axios(url)
    //   .then(res => {
    //     const {info, results} = res.data;
    //     setCharacters(results);
    //     setInfo(info);
    //   })
    //   .catch(error => console.log(('Error en petición', error)));
  };
  return (
    <>
      <h1>Excursiones</h1>
      <div className="experiences__container">
        {experiences.map((experience) => {
          return (
            <div className="experience" key={experience.id}>
              <img className="experience__image" src={experience.imagen} alt={experience.titulo} />
              <div>
                ID: 
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
      {info.prev && <button onClick={() => getMoreExperiences(info.prev)}>Página anterior</button>}
      <button onClick={() => getMoreExperiences(info.next)}>Página Siguiente</button>
    </>
  );
};

export default ExperiencesAll;
