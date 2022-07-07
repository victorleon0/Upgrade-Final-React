const PokemonCard = ({pokemon}) => {
  return (
    <li className="card" key={pokemon.name}>
      <img src={pokemon.image} alt={pokemon.name} />
      <p className="card-title">{pokemon.name}</p>
      <div className="card-subtitle">
        {pokemon.type[0]} {pokemon.type[1] ? `, ${pokemon.type[1]}` : ""}
      </div>
    </li>
  );
};

export default PokemonCard;