import React, { Component } from "react";
import { connect } from "react-redux";
import EditProfile from "./EditExperience.js";
import ProfileCard from "../components/ExperiencesAdmin/ExperienceCard/ExperienceCard.js";
import "./ExperienceList.scss";

class ProfileList extends Component {
  render() {
    return (
      <div className="flex-container_list">
        {this.props.experiences.map((experience) => (
          <div key={experience.id} className="cardframe">
            {experience.editing ? (
              <EditProfile experience={experience} key={experience.id} />
            ) : (
              <ProfileCard key={experience.id} experience={experience} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
  };
};

export default connect(mapStateToProps)(ProfileList);
