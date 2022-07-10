import React, { Component } from 'react';
import { deleteProfile, editProfile } from '../../actions/profile.js';
import { connect } from 'react-redux';
import './ProfileCard.css';

class ProfileCard extends Component {

  handleDelete = () => {
    this.props.deleteProfile(this.props.profile.id)
  }

  handleEdit = () => {
    this.props.editProfile(this.props.profile.id)
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

export default connect(null, {deleteProfile, editProfile})(ProfileCard)
