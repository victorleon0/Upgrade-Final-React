const FilterByTypes = ({types, filter, pokemons}) => {

  const filterByType = (event) => {
    const typeToFilter = event.target.classList[0];
    console.log(typeToFilter);
    if (typeToFilter === "all") return filter(pokemons);
  
    const filtered = pokemons.filter((pokemon) => {
      const matchType = pokemon.type.includes(typeToFilter);
      return matchType;
    });

    return filter(filtered);
  };

  return types.map((type) => <span key={type} className={type} onClick={filterByType}>
    {type}
  </span>);
};

export default FilterByTypes;