const PokemonCard = ({pokemon}) => {
  return (
    <li className="card" key={pokemon.name}>
      <img src={pokemon.image} alt={pokemon.name} />
      <p className="card-title">{pokemon.name}</p>
      <div className="card-subtitle">
        {pokemon.type[0]} {pokemon.type[1] ? `, ${pokemon.type[1]}` : ""}
        {/* 
        {user.role === "admin" ? (<button>Edit Experience</button>) : null} 

        TO-DO: Poner un evento onClick al botón de Edit Experience para redireccionarlo. 
        Faltaría poner la ruta de Edit Experience al archivo index.js. 

        */}
      </div>
    </li>
  );
};

export default PokemonCard;