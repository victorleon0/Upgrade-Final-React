import React, { Component } from 'react';
import { deleteExperience, editExperience } from '../../../actions/experience.js';
import { connect } from 'react-redux';
import './ExperienceCard.css';

class ProfileCard extends Component {

  handleDelete = () => {
    this.props.deleteExperience(this.props.experience.id)
  }

  handleEdit = () => {
    this.props.editExperience(this.props.experience.id)
  }

  render() {
    return (
      <div className="flex-container_card">
      <div className="card">
        <div className="title" style={{width:"100%", height:"50px", fontSize:"2rem", textAlign: "center"}}>{this.props.profile.name}</div>
        <img src={this.props.profile.picture} alt="profile_picture" style={{width:"100%", height: "50%"}}/>
        <p>{this.props.profile.email}</p>
        <p>{this.props.profile.message}</p>
        <button className="edit" onClick={this.handleEdit}>EDIT</button>
        <button className="delete" onClick={this.handleDelete}>DELETE</button>
      </div>
      </div>
    )
  }
}

export default connect(null, {deleteExperience, editExperience})(ProfileCard)
