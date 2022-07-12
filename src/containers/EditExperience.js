import EditForm from "../components/ExperiencesAdmin/EditForm/EditForm.js";
import { createExperience } from "../redux/experience/experience.actions";
import { useDispatch } from "react-redux";

const EditContainer = ({experience}) => {
  const dispatch = useDispatch();

  const handleUpdate = (data) => {
    dispatch(createExperience(data));
  };

  return (
    <div>
      <EditForm experience={experience} onSubmit={handleUpdate} />
    </div>
  );
}

export default EditContainer;
