const getIndividualExperience = async (url) => {
  try {
    const res = await fetch(url);
    const { titulo, id, subtitulo, precio, imagen, categoryid } = await res.json();
    const experience = {
      id,
      titulo,
      subtitulo,
      precio,
      imagen,
      categoryid,
    };

    return experience;
  } catch (error) {
    console.log("Error obteniendo las excursiones", error);
  }
};

const getExperienceCategories = (experiences) =>
  experiences.reduce((acc, curr) => {
    curr.category.forEach((category) => {
      if (!acc.includes(category)) {
        acc.push(category);
      }
    });

    return acc;
  }, []);

const getExperiencesList = async () => {
  try {
    const res = await fetch("http://localhost:6022/experiences", { mode: "cors" });

    const result = await res.json();
    console.log(result);
    return result.results;
  } catch (error) {
    console.log("Error obteniendo todas las excursiones", error);
  }
};

export const getExperiencesAndCategories = async () => {
  const allExperiences = await getExperiencesList();
  const experiencesWithDetails = [];

  for (const experiences of allExperiences) {
    const oneExperience = await getIndividualExperience(experiences.url);
    await experiencesWithDetails.push(oneExperience);
  }

  return {
    experiences: experiencesWithDetails,
  };
};
