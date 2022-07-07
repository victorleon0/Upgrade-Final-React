import React from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";

import { useEffect, useState } from "react";
import { getPokemonsAndTypes } from "../../api/pokemons.api";
import DrawPokemons from "../../components/Experiences/DrawExperiences";
import FilterByTypes from "../../components/Experiences/FilterByTypes";
import SearchPokemonInput from "../../components/Experiences/FilterByInput";
import "./Trips.scss";

const Trips = () => {
  const [pokemons, setPokemons] = useState([]); // ALL_POKEMONS
  const [pokemonsToShow, setPokemonsToShow] = useState([]);
  const [types, setTypes] = useState(["all"]); // Crear un botón para el all en lugar de meterlo al

  const fetchPokemonsFromApi = async () => {
    const { pokemons, pokemonTypes } = await getPokemonsAndTypes();
    setPokemons(pokemons);
    setTypes([...types, ...pokemonTypes]);
  };

  useEffect(() => {
    fetchPokemonsFromApi();
    // eslint-disable-next-line
  }, []);

  const filter = (results) => {
    setPokemonsToShow(results);
  };

  const getPokemonsToShow = () => {
    const input = document.querySelector("#input-search");

    if (!pokemonsToShow.length && input.value) {
      return [];
    }

    return pokemonsToShow;
  };

  return (
    <div className="container">
      <div className="navigator">
        <Navigation />
      </div>
      <div className="searchbar">
      <SearchPokemonInput pokemons={pokemons} filter={filter} /></div>
      <h1>Excursiones</h1>
      <div className="types">
        <FilterByTypes types={types} filter={filter} pokemons={pokemons} />
      </div>
      <ol id="pokedex">
        <DrawPokemons
          pokemons={pokemonsToShow.length ? getPokemonsToShow() : pokemons}
        />
      </ol>
    </div>
  );
};

export default Trips;
