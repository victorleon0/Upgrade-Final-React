const FilterByInput = ({experiences, restaurants, filter}) => {

    const filterByNameOrId = (event) => {
      const inputValue = event.target.value.toLowerCase();
      
      const filtered = experiences.filter((experience) => {
        const matchName = experience.title.toLowerCase().includes(inputValue);
        const matchId = experience.id === Number(inputValue);
    
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
  