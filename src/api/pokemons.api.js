const getIndividualPokemon = async (url) => {
    try {
      const res = await fetch(url);
      const {name, id, types, sprites} = await res.json();
      const pokemon = {
        name,
        id,
        type: types.map((type) => type.type.name),
        image: sprites["front_default"],
      };
  
      return pokemon;
    } catch (error) {
      console.log("Error obteniendo todos los pokemons", error)
    }
  };
  
  const getPokemonTypes = pokemons => pokemons.reduce((acc, curr) => {
    curr.type.forEach(type => {
      if(!acc.includes(type)) {
        acc.push(type);
      }
    });
  
    return acc;
  }, [])
  
  const getPokemonsList = async() => {
    try {

      const res = await fetch("http://localhost:6000/experiences", {mode: 'cors'})

      const result = await res.json();
      console.log(result);
      return result.results;
    } catch (error) {
      console.log("Error obteniendo todos los pokemons", error);
    }
  }
  
  export const getPokemonsAndTypes = async () => {
    const pokes = await getPokemonsList();
    const pokesWithDetails = [];
    
    for (const pokemon of pokes) {
      const poke = await getIndividualPokemon(pokemon.url);
      await pokesWithDetails.push(poke);
    }
  
    return {
      pokemons: pokesWithDetails,
      pokemonTypes: getPokemonTypes(pokesWithDetails),
    };
  }
  