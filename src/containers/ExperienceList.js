import { useSelector } from "react-redux";
import EditExperience from "./EditExperience.js";
import ExperienceCard from "../components/ExperiencesAdmin/ExperienceCard/ExperienceCard.js";
import "./ExperienceList.scss";

const ExperienceList = () => {
  const experiences = useSelector(state => state.experience.experiences);

  return (
    <div className="flex-container_list">
      {experiences.map((experience) => (
        <div key={experience.id} className="cardframe">
          {experience.editing ? (
            <EditExperience experience={experience} key={experience.id} />
          ) : (
            <ExperienceCard key={experience.id} experience={experience} />
          )}
        </div>
      ))}
    </div>
  );
}

export default ExperienceList;