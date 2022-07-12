import React, { Component } from "react";
import ProfileForm from "../components/ExperiencesAdmin/ExperienceForm/ExperienceForm";
import { addExperience } from "../actions/experience.js";
import { connect } from "react-redux";

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
