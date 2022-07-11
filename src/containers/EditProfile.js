import React, { Component } from 'react';
import EditForm from '../components/EditForm/EditForm.js';
import { updateProfile } from '../actions/profile.js';
import { connect } from 'react-redux';


class EditContainer extends Component {


  handleUpdate = data => {
    this.props.updateProfile(data)
  }

  render() {
    return (
      <div>
        <EditForm profile={this.props.profile} onSubmit={this.handleUpdate} />
      </div>
    )
  }
}


export default connect(null, { updateProfile })(EditContainer)
