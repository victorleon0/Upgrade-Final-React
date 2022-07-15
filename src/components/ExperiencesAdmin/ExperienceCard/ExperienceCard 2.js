import { deleteExperience, editExperience } from "../../../redux/experience/experience.actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ExperienceCard.scss";

const ExperienceCard = ({ experience }) => {
  // <ExperienceCard experience={experience} />
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExperience(experience.id));
  };

  const handleEdit = () => {
    const cb = navigate('/');
    dispatch(editExperience(experience, cb));
  };

  return (
    <div className="flex-container_card">
      <div className="card">
        <div className="title" style={{ width: "100%", height: "50px", fontSize: "2rem", textAlign: "center" }}>
          {this.props.profile.name}
        </div>
        <img src={this.props.profile.picture} alt="profile_picture" style={{ width: "100%", height: "50%" }} />
        <p>{this.props.profile.email}</p>
        <p>{this.props.profile.message}</p>
        <button className="edit" onClick={() => handleEdit()}>
          EDIT
        </button>
        <button className="delete" onClick={() => handleDelete()}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;
