const ExperiencesCard = ({experiences}) => {
  return (
    <li className="card" key={experience.name}>
      <img src={experience.image} alt={experience.name} />
      <p className="card-title">{experience.name}</p>
      <div className="card-subtitle">
        {experience.type[0]} {experience.type[1] ? `, ${experience.type[1]}` : ""}
        {/* 
        {user.role === "admin" ? (<button>Edit Experience</button>) : null} 

        TO-DO: Poner un evento onClick al botón de Edit Experience para redireccionarlo. 
        Faltaría poner la ruta de Edit Experience al archivo index.js. 

        */}
      </div>
    </li>
  );
};

export default ExperiencesCard;