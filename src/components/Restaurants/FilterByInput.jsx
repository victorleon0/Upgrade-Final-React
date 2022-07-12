const FilterByInput = ({ pokemons, filter }) => {
  const filterByNameOrId = (event) => {
    const inputValue = event.target.value.toLowerCase();

    const filtered = pokemons.filter((pokemon) => {
      const matchName = pokemon.name.toLowerCase().includes(inputValue);
      const matchId = pokemon.id === Number(inputValue);

      return matchName || matchId;
    });

    filter(filtered);
  };

  return (
    <div className="input-container">
      <input id="input-search" type="text" onChange={filterByNameOrId} />
    </div>
  );
};

export default FilterByInput;
