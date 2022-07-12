import React, { Component } from "react";
import EditForm from "../components/ExperiencesAdmin/EditForm/EditForm.js";
import { createExperience } from "../redux/experience/experience.actions";
import { connect } from "react-redux";

class EditContainer extends Component {
  handleUpdate = (data) => {
    this.props.createExperience(data);
  };

  render() {
    return (
      <div>
        <EditForm experience={this.props.experience} onSubmit={this.handleUpdate} />
      </div>
    );
  }
}

export default connect(null, { createExperience })(EditContainer);
