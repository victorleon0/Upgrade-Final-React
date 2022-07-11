const getExperienciesList = async() => {
    try {
      const res = await fetch("http://localhost:6022/experiences", {mode: 'cors'})
      const result = await res.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log("Error obteniendo todos los pokemons", error);
    }
  }
  
  export const getExperiencies = async () => {
    const experiences = await getExperienciesList();
  
    return experiences
  }