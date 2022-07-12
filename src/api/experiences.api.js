import { experienceUrl } from "../helpers/url.helper";

const getIndividualExperience = async (url) => {
  try {
    const res = await fetch(url);
    const { title, id, subtitle, price, image, categoryId } = await res.json();
    const experience = {
      id,
      title,
      subtitle,
      price,
      image,
      categoryId,
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
    const res = await fetch(experienceUrl, { mode: "cors" });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("Error obteniendo todas las excursiones", error);
  }
};

export const getExperiencesAndCategories = async () => {
  const allExperiences = await getExperiencesList();
  const experiencesWithDetails = [];

  for (const experiences of allExperiences) {
    const oneExperience = await getIndividualExperience(experiences.url);
    experiencesWithDetails.push(oneExperience);
  }

  return {
    experiences: experiencesWithDetails,
  };
};
