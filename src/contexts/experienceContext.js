import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

export const ExperienceContext = React.createContext();

export const useExperienceContext = () => {
  return useContext(ExperienceContext);
};

export default function ExperienceProvider({ children }) {
  const [experience, setExperience] = useState([]);
  const [experienceSearch, setExperienceSearch] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:6022/experiences")
      .then((result) => setExperience(result.data));
  }, []);

  useEffect(() => {
    if (search.length > 2) {
      setExperienceSearch(
        experience.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else if (search.length < 2) {
      setExperienceSearch([]);
    }
  }, [search]);

  const store = {
    experience,
    setExperience,
    search,
    setSearch,
    experienceSearch,
  };

  return (
    <ExperienceContext.Provider value={store}>{children}</ExperienceContext.Provider>
  );
}