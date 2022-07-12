import React, { Component } from "react";
import EditForm from "../components/ExperiencesAdmin/EditForm/EditForm.js";
import { updateExperience } from "../actions/experience";
import { connect } from "react-redux";

class EditContainer extends Component {
  handleUpdate = (data) => {
    this.props.updateExperience(data);
  };

  render() {
    return (
      <div>
        <EditForm experience={this.props.experience} onSubmit={this.handleUpdate} />
      </div>
    );
  }
}

export default connect(null, { updateExperience })(EditContainer);
