import React, { Component } from "react";
import { connect } from "react-redux";
import { addExperience } from "../redux/experience/experience.actions";
import ProfileForm from "../components/ExperiencesAdmin/ExperienceForm/ExperienceForm";

class PostProfile extends Component {
  addExperience = (data) => {
    this.props.addExperience(data);
  };

  render() {
    return (
      <div>
        <ProfileForm onSubmit={this.addExperience} onClick={"/admin/manageexperiences"} />
      </div>
    );
  }
}

export default connect(null, { addExperience })(PostProfile);
