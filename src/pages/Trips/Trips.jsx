import { useEffect } from "react";
import { getExperiencies } from "../../api/experiencies.api";

const Trips = () => {
  const fetchPokemonsFromApi = async () => {
    const experiences = await getExperiencies();
    console.log(experiences);
  };
};

useEffect(() => {
  fetchPokemonsFromApi();
  // eslint-disable-next-line
}, []);

export default Trips;
