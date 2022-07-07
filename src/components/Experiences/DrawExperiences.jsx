import PokemonCard from "./ExperiencesCard";

const DrawPokemons = ({pokemons}) => {
  return pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />);
};

export default DrawPokemons;